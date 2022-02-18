import styles from './TermsCard.module.scss';
import Date from './Date';
import Time from './Time';
import { useState, useEffect } from 'react';

const TermsCard = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [times, setTimes] = useState(null);
  const [datesData, setDatesData] = useState(null);
  useEffect(() => {
    fetch('/api/therapy-times')
      .then((response) => response.json())
      .then((json) => {
        const firstDay = json[0];
        setSelectedDay(firstDay);
        setTimes(firstDay.times);
        setDatesData(json);
      });
  }, []);
  return (
    <div className={styles.wrapper}>
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
  );
};

export default TermsCard;
