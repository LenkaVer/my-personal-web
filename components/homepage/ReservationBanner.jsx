import styles from './ReservationBanner.module.scss';
import Button from './../globals/Button';
import Link from 'next/link';
import { useEffect } from 'react';

const ReservationBanner = () => {
  useEffect(() => {
    const paths = document.querySelectorAll(`.${styles['calendarWindow']}`);
    const callendarInterval = setInterval(() => {
      paths.forEach((path) => {
        path.style.fill = '#449DD1';
      });
      const random = Math.floor(Math.random() * paths.length);
      paths[random].style.fill = '#664a5a';
    }, 2000);
    return () => {
      clearInterval(callendarInterval);
    };
  }, []);
  return (
    <section className={styles.section}>
      <div className="container">
        {/* <img src={'/icons/calendar.svg'} alt="kalendář" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="708.75"
          viewBox="0 0 708.75 567"
          height="567"
          version="1.0"
        >
          <defs>
            <clipPath id="a">
              <path d="M 181 41 L 681.023438 41 L 681.023438 566 L 181 566 Z M 181 41" />
            </clipPath>
          </defs>
          <path
            fill="#78C0E0"
            d="M 579.066406 536.019531 C 579.066406 552.585938 565.652344 565.996094 549.109375 565.996094 L 58.640625 565.996094 C 42.097656 565.996094 28.683594 552.585938 28.683594 536.019531 L 28.683594 110.46875 C 28.683594 93.933594 42.097656 80.523438 58.640625 80.523438 L 549.109375 80.523438 C 565.652344 80.523438 579.066406 93.933594 579.066406 110.46875 L 579.066406 536.019531"
          />
          <path
            fill="#FFF"
            d="M 579.066406 503.953125 C 579.066406 520.488281 565.652344 533.898438 549.109375 533.898438 L 58.640625 533.898438 C 42.097656 533.898438 28.683594 520.488281 28.683594 503.953125 L 28.683594 78.371094 C 28.683594 61.835938 42.097656 48.425781 58.640625 48.425781 L 549.109375 48.425781 C 565.652344 48.425781 579.066406 61.835938 579.066406 78.371094 L 579.066406 503.953125"
          />
          <path
            fill="#664A5A"
            d="M 579.066406 194.058594 L 579.066406 78.371094 C 579.066406 61.835938 565.652344 48.425781 549.109375 48.425781 L 58.640625 48.425781 C 42.097656 48.425781 28.683594 61.835938 28.683594 78.371094 L 28.683594 194.058594 L 579.066406 194.058594"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 140.546875 271.8125 L 81.046875 271.8125 L 81.046875 230.402344 L 140.546875 230.402344 L 140.546875 271.8125"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 237.078125 271.8125 L 177.609375 271.8125 L 177.609375 230.402344 L 237.078125 230.402344 L 237.078125 271.8125"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 333.609375 271.8125 L 274.140625 271.8125 L 274.140625 230.402344 L 333.609375 230.402344 L 333.609375 271.8125"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 430.171875 271.8125 L 370.671875 271.8125 L 370.671875 230.402344 L 430.171875 230.402344 L 430.171875 271.8125"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 526.703125 271.8125 L 467.203125 271.8125 L 467.203125 230.402344 L 526.703125 230.402344 L 526.703125 271.8125"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 140.546875 339.984375 L 81.046875 339.984375 L 81.046875 298.574219 L 140.546875 298.574219 L 140.546875 339.984375"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 237.078125 339.984375 L 177.609375 339.984375 L 177.609375 298.574219 L 237.078125 298.574219 L 237.078125 339.984375"
          />
          <path
            className={styles.calendarWindow}
            fill="#664A5A"
            d="M 333.609375 339.984375 L 274.140625 339.984375 L 274.140625 298.574219 L 333.609375 298.574219 L 333.609375 339.984375"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 430.171875 339.984375 L 370.671875 339.984375 L 370.671875 298.574219 L 430.171875 298.574219 L 430.171875 339.984375"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 526.703125 339.984375 L 467.203125 339.984375 L 467.203125 298.574219 L 526.703125 298.574219 L 526.703125 339.984375"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 140.546875 408.191406 L 81.046875 408.191406 L 81.046875 366.777344 L 140.546875 366.777344 L 140.546875 408.191406"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 237.078125 408.191406 L 177.609375 408.191406 L 177.609375 366.777344 L 237.078125 366.777344 L 237.078125 408.191406"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 333.609375 408.191406 L 274.140625 408.191406 L 274.140625 366.777344 L 333.609375 366.777344 L 333.609375 408.191406"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 430.171875 408.191406 L 370.671875 408.191406 L 370.671875 366.777344 L 430.171875 366.777344 L 430.171875 408.191406"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 526.703125 408.191406 L 467.203125 408.191406 L 467.203125 366.777344 L 526.703125 366.777344 L 526.703125 408.191406"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 140.546875 476.363281 L 81.046875 476.363281 L 81.046875 434.953125 L 140.546875 434.953125 L 140.546875 476.363281"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 237.078125 476.363281 L 177.609375 476.363281 L 177.609375 434.953125 L 237.078125 434.953125 L 237.078125 476.363281"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 333.609375 476.363281 L 274.140625 476.363281 L 274.140625 434.953125 L 333.609375 434.953125 L 333.609375 476.363281"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 430.171875 476.363281 L 370.671875 476.363281 L 370.671875 434.953125 L 430.171875 434.953125 L 430.171875 476.363281"
          />
          <path
            className={styles.calendarWindow}
            fill="#449DD1"
            d="M 526.703125 476.363281 L 467.203125 476.363281 L 467.203125 434.953125 L 526.703125 434.953125 L 526.703125 476.363281"
          />
          <path
            fill="#78C0E0"
            d="M 154.90625 105.015625 C 154.90625 118.605469 143.90625 129.597656 130.316406 129.597656 C 116.753906 129.597656 105.753906 118.605469 105.753906 105.015625 L 105.753906 24.464844 C 105.753906 10.90625 116.753906 -0.0898438 130.316406 -0.0898438 C 143.90625 -0.0898438 154.90625 10.90625 154.90625 24.464844 L 154.90625 105.015625"
          />
          <path
            fill="#78C0E0"
            d="M 501.996094 105.015625 C 501.996094 118.605469 490.996094 129.597656 477.433594 129.597656 C 463.871094 129.597656 452.84375 118.605469 452.84375 105.015625 L 452.84375 24.464844 C 452.84375 10.90625 463.871094 -0.0898438 477.433594 -0.0898438 C 490.996094 -0.0898438 501.996094 10.90625 501.996094 24.464844 L 501.996094 105.015625"
          />
          <path
            fill="#664A5A"
            d="M 680.285156 415.941406 C 680.285156 471.824219 634.96875 517.125 579.066406 517.125 C 523.164062 517.125 477.847656 471.824219 477.847656 415.941406 C 477.847656 360.058594 523.164062 314.757812 579.066406 314.757812 C 634.96875 314.757812 680.285156 360.058594 680.285156 415.941406"
          />
          <g clipPath="url(#a)">
            <path
              transform="matrix(.29484 0 0 -.29474 -272.352 909.577)"
              fill="none"
              d="M 2671.098839 1678.29879 L 2817.296889 1535.20539 L 3104.393557 1814.500594"
              stroke="#FFF"
              strokeWidth="80"
              strokeMiterlimit="10"
            />
          </g>
        </svg>
        <Link href="/rezervace" passHref>
          <Button title="Rezervovat termín" />
        </Link>
      </div>
    </section>
  );
};

export default ReservationBanner;
