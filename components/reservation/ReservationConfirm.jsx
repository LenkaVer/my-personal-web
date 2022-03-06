import styles from './ReservationConfirm.module.scss';

const ReservationConfirm = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          Termín rezervován
        </h1>
        <div>
          <h2 className={[styles.title, 'subheading'].join(' ')}>
            Děkuji Vám za rezervaci termínu
          </h2>
          <p>V nejbližších dnech Vám na email přijde potvrzení rezervace.</p>
        </div>
      </div>
    </section>
  );
};

export default ReservationConfirm;
