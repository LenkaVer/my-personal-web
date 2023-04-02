import styles from './IntroSection.module.scss';
import Image from 'next/image';
import SectionCard from '../globals/SectionCard';
import { imageLoader } from '../../functions/imageLoader';

const IntroSection = ({ images }) => {
  return (
    <SectionCard
      mainTitle={'Watsu v Českých Budějovicích'}
      extraClass={'introSection'}
    >
      <div className={styles.description}>
        <h2
          className={[styles.heading, 'titleDecoration', 'sectionHeading'].join(
            ' ',
          )}
        >
          Watsu terapie
        </h2>
        <p>
          WATSU&reg;(water Shiatsu), je jemná forma tělesné terapie, která
          pochází z techniky Zen-Shiatsu. Spojuje v sobě prvky z masáže,
          Shiatsu, mobilizace kloubů, protažení svalů, tanec a práci s meridiány
          ve 34°C teplé vodě. Založená byla v roce 1980 Haroldem Dullem.
        </p>
        <p>
          Nosné vlastnosti vody dovolí trojrozměrné pohyby, jaké na zemi nejsou
          možné. Voda přináší stav bez tíže, společně s vyšší teplotou a
          plynulými pohyby v ní se uvolňují svaly, prohlubuje se dech a přichází
          hluboký relaxační stav. Střídají se okamžiky klidu s rytmickými
          plynulými pohyby a protažením svalů. Hlava zůstává při této metodě
          vždy na hladině vody. S touto podporou a bez vnímané hmotnosti těla,
          páteře, kloubů a svalů je snadné uvolnit se k jedinečném
          terapeutickému prožitku.
        </p>
      </div>
      <div className={styles.opinion}>
        <h3
          className={[styles.subheading, 'titleDecoration', 'subheading'].join(
            ' ',
          )}
        >
          Moje cesta k watsu
        </h3>
        <p>
          S Watsu jsem se prvně potkala v roce 2017 v meditačním centru u
          Karlových Varů. Byl to pro mě takový zážitek, že jsem se hned po
          terapii ptala, kde se dá tato metoda naučit. Tak jsem se dostala k{' '}
          <a
            href="https://www.watsu-czech.cz/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Watsu Czech
          </a>
          , kde jsem po několikaletém studiu vzdělání dokončila a stala se watsu
          terapeutem.
        </p>
        <p>
          To co dělá pro mě tuto metodu výjimečnou je kombinace prostředí teplé
          vody, stavu bez tíže a důvěry mezi klientem a terapeutem. Je to pro mě
          zároveň velmi přirozená cesta k meditaci, k bytí v přítomnosti, k
          naslouchání tělu, cesta k tanci, který mi plynulé pohyby ve vodě
          připomínají.
        </p>
      </div>

      <div className={styles.image}>
        <Image
          loader={imageLoader}
          priority={true}
          src={images.introSectionFoto.hash}
          alt={images.introSectionFoto.alt}
          width={400}
          height={400}
          placeholder={'blur'}
          blurDataURL={images.introSectionFoto.base64}
          sizes="(max-width: 340px) 45vw,
          (max-width: 576px) 50vw,
          (max-width: 710px) 20vw,
          (max-width: 991px) 193px,
          278px"
        />
      </div>
    </SectionCard>
  );
};

export default IntroSection;
