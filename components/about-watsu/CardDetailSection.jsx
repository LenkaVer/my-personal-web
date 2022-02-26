import styles from './CardDetailSection.module.scss';

const CardDetailSection = ({ title, imageSource, imageAlt, children }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          {title}
        </h1>
        <div className={styles.wrapper}>
          <img className={styles.image} src={imageSource} alt={imageAlt} />
          {children}
        </div>
        {/* <div className={styles.decoration}>
          <img src={'/icons/whale.svg'} alt={imageAlt} />
        </div> */}
      </div>
    </section>
  );
};

export default CardDetailSection;
