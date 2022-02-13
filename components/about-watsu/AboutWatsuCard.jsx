import styles from './AboutWatsuCard.module.scss';
import Link from 'next/link';

const AboutWatsuCard = ({ title, link, imageSource, imageAlt, children }) => {
  return (
    <div className={styles['about-watsu-card']}>
      <img
        className={styles['about-watsu-card__image']}
        src={imageSource}
        alt={imageAlt}
      />
      <h2
        className={[styles['about-watsu-card__title'], 'subheading'].join(' ')}
      >
        {title}
      </h2>

      {children}
      <Link href={link}>
        <a className={styles['about-watsu-card__link']}>
          Číst více
          <img
            className={styles['about-watsu-card__link-icon']}
            src={'/icons/arrow-right.svg'}
            alt="logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default AboutWatsuCard;
