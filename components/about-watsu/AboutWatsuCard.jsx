import styles from './AboutWatsuCard.module.scss';
import Link from 'next/link';

const AboutWatsuCard = ({ title, link, imageSource, imageAlt, children }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageSource} alt={imageAlt} />
      <Link href={link} className={styles.titleLink}>
        <h2 className={[styles.title, 'subheading'].join(' ')}>{title}</h2>
      </Link>

      {children}
      <Link href={link} className={styles.link}>
        Číst více
        <svg
          className={styles.linkIcon}
          xmlns='http://www.w3.org/2000/svg'
          width='75'
          viewBox='0 0 75 75'
          height='75'
          version='1.0'
        >
          <defs>
            <clipPath id='a'>
              <path d='M 8.085938 16.761719 L 66.585938 16.761719 L 66.585938 58.011719 L 8.085938 58.011719 Z M 8.085938 16.761719' />
            </clipPath>
          </defs>
          <g clipPath='url(#a)'>
            <path
              fill='#664A5A'
              d='M 66.429688 36.867188 C 66.410156 36.804688 66.386719 36.742188 66.363281 36.683594 C 66.347656 36.652344 66.335938 36.625 66.320312 36.59375 C 66.226562 36.402344 66.097656 36.222656 65.9375 36.0625 L 47.429688 17.546875 C 46.640625 16.761719 45.367188 16.761719 44.582031 17.546875 C 43.796875 18.332031 43.796875 19.605469 44.582031 20.394531 L 59.660156 35.472656 L 10.152344 35.472656 C 9.042969 35.472656 8.140625 36.375 8.140625 37.484375 C 8.140625 38.597656 9.042969 39.496094 10.152344 39.496094 L 59.660156 39.496094 L 44.582031 54.578125 C 43.796875 55.363281 43.796875 56.636719 44.582031 57.421875 C 44.976562 57.816406 45.492188 58.011719 46.003906 58.011719 C 46.519531 58.011719 47.035156 57.816406 47.429688 57.421875 L 65.9375 38.90625 C 66.332031 38.515625 66.527344 38 66.527344 37.484375 C 66.527344 37.277344 66.496094 37.066406 66.433594 36.867188 Z M 66.429688 36.867188'
            />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default AboutWatsuCard;
