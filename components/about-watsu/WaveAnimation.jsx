import styles from './WaveAnimation.module.scss';

const WaveAnimation = () => {
  return (
    <div className={styles.pool}>
      <svg
        className={styles.waveBig}
        viewbox="0 0 3024 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="sineWave"
            fill="#449DD1"
            fillOpacity="0.3"
            d="M 0 305.76 C 672 573.3 882 573.3 1554 305.76 C 2226 38.22 2352 38.22 3024 305.76 V 0 H 0"
          />
        </defs>
        <use className={styles.firstWave} href="#sineWave" />
        <use className={styles.firstWave} x="-100%" href="#sineWave" />
        <use className={styles.secondWave} href="#sineWave" />
        <use className={styles.secondWave} x="-100%" href="#sineWave" />
        <use className={styles.thirdWave} href="#sineWave" />
        <use className={styles.thirdWave} x="-100%" href="#sineWave" />
      </svg>
      <svg
        className={styles.waveMiddle}
        viewbox="0 0 2177 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="sineWave2"
            fill="#449DD1"
            fillOpacity="0.3"
            d="M 0 220.1472 C 483.84 412.776 635.04 412.776 1118.88 220.1472 C 1602.72 27.5184 1693.44 27.5184 2177.28 220.1472 V 0 H 0"
          />
        </defs>
        <use className={styles.firstWave} href="#sineWave2" />
        <use className={styles.firstWave} x="-100%" href="#sineWave2" />
        <use className={styles.secondWave} href="#sineWave2" />
        <use className={styles.secondWave} x="-100%" href="#sineWave2" />
        <use className={styles.thirdWave} href="#sineWave2" />
        <use className={styles.thirdWave} x="-100%" href="#sineWave2" />
      </svg>
      <svg
        className={styles.waveSmall}
        viewbox="0 0 1094 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="sineWave3"
            fill="#449DD1"
            fillOpacity="0.3"
            d="M 0 110.0736 C 241.92 206.388 317.52 206.388 559.44 110.0736 C 801.36 13.7592 846.72 13.7592 1094 110 V 2 H 0"
          />
        </defs>
        <use className={styles.firstWave} href="#sineWave3" />
        <use className={styles.firstWave} x="-100%" href="#sineWave3" />
        <use className={styles.secondWave} href="#sineWave3" />
        <use className={styles.secondWave} x="-100%" href="#sineWave3" />
        <use className={styles.thirdWave} href="#sineWave3" />
        <use className={styles.thirdWave} x="-100%" href="#sineWave3" />
      </svg>
    </div>
  );
};

export default WaveAnimation;
