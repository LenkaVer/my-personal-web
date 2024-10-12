import styles from './Date.module.scss';

const Date = ({ date, selectedDay, setSelectedDay, setTimes }) => {
  return (
    <li
      className={[
        styles.listItem,
        date === selectedDay ? styles.active : null,
      ].join(' ')}
      key={date.date}
      onClick={() => {
        setSelectedDay(date);
        setTimes(date.times);
      }}
    >
      <h2 className={styles.itemTitle}>
        <span>{date.dayOfWeekShort}</span> {date.dateFormatted.slice(0, -5)}
        {date.city && (
          <span>
            <br />
            {date.city.name}
          </span>
        )}
      </h2>
    </li>
  );
};

export default Date;
