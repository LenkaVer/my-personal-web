import styles from "./TermsCard.module.scss";
import Date from "./Date";
import Time from "./Time";
import PriceSection from "./PriceSection";
import Loader from "./../globals/Loader";
import CalendarAnimated from "../calendar-animated/CalendarAnimated";
//import Image from 'next/image';
import Link from "next/link";
//import { imageLoader } from '../../functions/imageLoader';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const TermsCard = ({ images }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [times, setTimes] = useState(null);
  const [datesData, setDatesData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/therapy-times")
      .then((response) => response.json())
      .then((json) => {
        const firstDay = json[0];
        if (firstDay) {
          setSelectedDay(firstDay);
          setTimes(firstDay.times);
          setDatesData(json);
        } else {
          router.push("/rezervace/email-o-terminech");
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
        <ul className={styles.listTime}>
          {times ? (
            times.map((time) => {
              return <Time key={time.id} time={time} />;
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>

      <p className={[styles.paragraph, styles.paragraphBg].join(" ")}>
        Pokud jste si nevybrali žádný z aktuálně dostupných termínů , můžete{" "}
        <Link href="/rezervace/email-o-terminech">
          <a>vyplnit formulář</a>
        </Link>{" "}
        pro zasílání upozornění o vypsání nových termínů.
      </p>

      <PriceSection images={images} />
    </>
  );
};

export default TermsCard;
