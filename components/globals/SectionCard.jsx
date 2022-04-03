import styles from './SectionCard.module.scss';

const SectionCard = ({ mainTitle, children, extraClass }) => {
  return (
    <section className={extraClass ? styles[extraClass] : null}>
      <div className="container">
        {mainTitle && (
          <h1
            className={[styles.title, 'titleDecoration', 'mainHeading'].join(
              ' ',
            )}
          >
            {mainTitle}
          </h1>
        )}
        <div className={styles.wrapper}>{children}</div>
      </div>
    </section>
  );
};

export default SectionCard;
