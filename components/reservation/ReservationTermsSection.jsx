import styles from './ReservationTermsSection.module.scss';
import TermsCard from './TermsCard';

const ReservationTermsSection = ({ images }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          Rezervace termínu
        </h1>
        <TermsCard images={images} />
      </div>
    </section>
  );
};

export default ReservationTermsSection;
