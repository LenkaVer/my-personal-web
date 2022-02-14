import styles from './IntroSection.module.scss';
import Image from 'next/image';
import { imageLoader } from '../../functions/imageLoader';

const IntroSection = ({ images }) => {
  return (
    <section className={styles['intro-section']}>
      <div className="container">
        <h1
          className={[
            styles['intro-section__main-heading'],
            'title-decoration',
            ['main-heading'],
          ].join(' ')}
        >
          Watsu v Českých Budějovicích
        </h1>
        <div className={styles['intro-section__wrapper']}>
          <div className={styles['intro-section__description']}>
            <h2
              className={[
                styles['intro-section__heading'],
                'title-decoration',
                ['section-heading'],
              ].join(' ')}
            >
              Watsu terapie
            </h2>
            <p>
              WATSU<sup>&reg;</sup> (water Shiatsu), je jemná forma tělesné
              terapie, která pochází z techniky Zen-Shiatsu. Spojuje v sobě
              prvky z masáže, Shiatsu, mobilizace kloubů, protažení svalů, tanec
              a práci s meridiány ve 34°C teplé vodě.
            </p>
            <p>
              Nosné vlastnosti vody dovolí trojrozměrné pohyby, jaké na zemi
              nejsou možné. Voda přináší stav bez tíže, společně s vyšší
              teplotou a plynulými pohyby v ní se uvolňují svaly, prohlubuje se
              dech a přichází hluboký relaxační stav. Střídají se okamžiky klidu
              s rytmickými plynulými pohyby a protažením svalů. Hlava zůstává
              při této metodě vždy na hladině vody. S touto podporou a bez
              vnímané hmotnosti těla, páteře, kloubů a svalů je snadné uvolnit
              se k jedinečném terapeutickému prožitku.
            </p>
          </div>
          <div className={styles['intro-section__opinion']}>
            <h3
              className={[
                styles['intro-section__subheading'],
                'title-decoration',
                'subheading',
              ].join(' ')}
            >
              Moje cesta k watsu
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              rem, exercitationem, animi possimus cum impedit quis est
              voluptates repudiandae aliquam, blanditiis facere voluptate
              deleniti maxime debitis totam recusandae libero itaque. Fugit
              eligendi odio at, recusandae alias repellendus corporis sit?
              Delectus excepturi consequuntur illum natus alias optio
              praesentium quam vel, eos nesciunt ab quia voluptatibus sequi
              totam reiciendis nihil quibusdam dolore?
            </p>
          </div>

          <div className={styles['intro-section__img']}>
            <Image
              loader={imageLoader}
              src={images.introSectionFoto.hash}
              alt={images.introSectionFoto.alt}
              width={400}
              height={400}
              placeholder={'blur'}
              blurDataURL={images.introSectionFoto.base64}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
