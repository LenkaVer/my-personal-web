import styles from './ReservationBanner.module.scss';
import Button from './../globals/Button';
import Link from 'next/link';

const ReservationBanner = () => {
  return (
    <>
      <section className={styles['reservation-banner']}>
        <div className="container">
          <img src={'/icons/calendar.svg'} alt="kalendář" />
          <Link href="/" passHref>
            <Button title="Rezervovat termín" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReservationBanner;
