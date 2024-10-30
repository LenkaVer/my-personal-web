import styles from './TermsCard.module.scss';
import Date from './Date';
import Time from './Time';
import PriceSection from './PriceSection';
import Loader from './../globals/Loader';
import CalendarAnimated from '../calendar-animated/CalendarAnimated';
//import Image from 'next/image';
import Link from 'next/link';
//import { imageLoader } from '../../functions/imageLoader';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TermsCard = ({ images }) => {
  const defaultMinHeight = 300;
  const [selectedDay, setSelectedDay] = useState(null);
  const [times, setTimes] = useState(null);
  const [datesData, setDatesData] = useState(null);
  const [timesHeight, setTimesHeight] = useState(defaultMinHeight);
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
          if (json.length > 3) {
            const daysIncreaseHinHeight = json.length - 3;
            setTimesHeight(defaultMinHeight + daysIncreaseHinHeight * 85);
          }
        } else {
          router.push('/rezervace/email-o-terminech');
        }
      });
  }, [router]);
  return (
    <>
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
        <ul
          className={styles.listTime}
          style={{
            minHeight: timesHeight + 'px',
          }}
        >
          {times ? (
            times.map((time) => {
              return <Time key={time.id} time={time} />;
            })
          ) : (
            <Loader />
          )}
          {selectedDay?.city ? (
            <div className={styles.adress}>
              <p>
                <strong>{selectedDay.city.name}</strong> <br />
                <strong>Cena: {selectedDay.city.price},- Kč</strong>
              </p>
              <p>
                {selectedDay.city.addressLine1 && (
                  <>
                    {selectedDay.city.addressLine1} <br />
                  </>
                )}
                {selectedDay.city.addressLine2 && (
                  <>
                    {selectedDay.city.addressLine2} <br />
                  </>
                )}
                {selectedDay.city.addressLine3 && (
                  <>
                    {selectedDay.city.addressLine3} <br />
                  </>
                )}{' '}
              </p>{' '}
            </div>
          ) : null}
        </ul>
      </div>

      <p className={[styles.paragraph, styles.paragraphBg].join(' ')}>
        Pokud jste si nevybrali žádný z aktuálně dostupných termínů , můžete{' '}
        <Link href='/rezervace/email-o-terminech'>vyplnit formulář</Link> pro
        zasílání upozornění o vypsání nových termínů.
      </p>

      <PriceSection images={images} />
    </>
  );
};

export default TermsCard;
