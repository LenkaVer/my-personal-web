import styles from './ReservationBanner.module.scss';
import Button from './../globals/Button';
import CalendarAnimated from '../calendar-animated/CalendarAnimated';

const ReservationBanner = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <CalendarAnimated />
        <Button href="/rezervace" title="Rezervovat termín" />
      </div>
    </section>
  );
};

export default ReservationBanner;
