import styles from './TermsCard.module.scss';
import Date from './Date';
import Time from './Time';
import CalendarAnimated from '../calendar-animated/CalendarAnimated';
import Image from 'next/image';
import Link from 'next/link';
import { imageLoader } from '../../functions/imageLoader';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TermsCard = ({ images }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [times, setTimes] = useState(null);
  const [datesData, setDatesData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/therapy-times')
      .then((response) => response.json())
      .then((json) => {
        const firstDay = json[0];
        if (firstDay) {
          setSelectedDay(firstDay);
          setTimes(firstDay.times);
          setDatesData(json);
        } else {
          router.push('/rezervace/email-o-terminech');
        }
      });
  }, [router]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.terms}>
        <div className={styles.image}>
          <CalendarAnimated />
        </div>
        <ul className={styles.listDate}>
          {datesData
            ? datesData.map((date) => {
                return (
                  <Date
                    key={date.date}
                    date={date}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    setTimes={setTimes}
                  />
                );
              })
            : null}
        </ul>
        <ul className={styles.listTime}>
          {times
            ? times.map((time) => {
                return <Time key={time.id} time={time} />;
              })
            : null}
        </ul>
      </div>

      <p className={[styles.paragraph, styles.paragraphBg].join(' ')}>
        Pokud jste si nevybrali žádný z aktuálně dostupných termínů , můžete{' '}
        <Link href="/rezervace/email-o-terminech">
          <a>vyplnit formulář</a>
        </Link>{' '}
        pro zasílání upozornění o vypsání nových termínů.
      </p>

      <div className={styles.price}>
        <h2
          className={[styles.title, 'titleDecoration', 'subheading'].join(' ')}
        >
          Cena
        </h2>
        <p>
          Terapie probíhají v Baby Centru Šikulka (Rudolfovská 634,
          <a
            href="http://www.sikulka.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            www.sikulka.com
          </a>
          ) v Českých Budějovicích, cena je 1.100,- Kč.
        </p>
        <p className={styles.paragraphBg}>
          Terapie trvá přibližně 50-60 minut, doporučuji přijít 15 minut předem,
          abyste měli dostatek času na přípravu a ve sjednaný čas jste mohli být
          v bazénu. Na terapii je vhodné nejít těsně po jídle, ale ani hladový.
          S sebou plavky, ručník, hygienické potřeby (jako při běžné návštěvě
          bazénu), případně žabky. Po terapii je dobré mít klidnější režim, pít
          dostatek tekutin a udržovat se v teple.
        </p>
        <p>
          Na terapii je možné zakoupit <span>dárkový poukaz</span>.
        </p>
        <div className={styles.voucher}>
          <Image
            loader={imageLoader}
            src={images.voucher.hash}
            alt={images.voucher.alt}
            width={600}
            height={285}
            placeholder={'blur'}
            blurDataURL={images.voucher.base64}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsCard;
