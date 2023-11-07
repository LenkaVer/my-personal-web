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
            ' '
          )}
        >
          Watsu terapie
        </h2>
        <p>
          WATSU&reg; (water Shiatsu) je terapeutická technika, která vznikla v
          80. letech minulého století. Její tvůrce Harold Dull kombinoval prvky
          japonské shiatsu masáže a tradiční čínské medicíny s pohyby v teplé
          vodě (s teplotou kolem 34°C). Watsu může pomoci uvolnit napětí v těle,
          podpořit zdraví a navodit hlubokou relaxaci.
        </p>
        <p>
          Během terapie Watsu leží pacient ve vodě, podporován terapeutem, který
          provádí jemné krouživé pohyby těla a masáž. Tento proces pomáhá
          uvolnit napětí ve svalové tkáni a uvolnit blokované energetické dráhy
          v těle, čímž se podporuje celkové zdraví. Mnoho lidí také považuje
          watsu za relaxační a meditační zážitek, který jim pomáhá najít vnitřní
          klid a mír.
        </p>
        <p>
          Při této metodě zůstává hlava vždy nad vodou, možné je tuto techniku
          kombinovat s metodou OBA&reg; (Ocean Bodywork Aqua), kdy se terapie
          rozšiřuje i o techniky probíhající pod vodou (za použití nosního
          skřipce).
        </p>
      </div>
      <div className={styles.opinion}>
        <h3
          className={[styles.subheading, 'titleDecoration', 'subheading'].join(
            ' '
          )}
        >
          Moje cesta k watsu
        </h3>
        <p>
          S Watsu jsem se prvně potkala v roce 2017 v meditačním centru u
          Karlových Varů. Byl to pro mě takový zážitek, že jsem se hned po
          terapii ptala, kde se dá tato metoda naučit. Tak jsem se dostala k{' '}
          <a
            href='https://www.watsu-czech.cz/'
            target='_blank'
            rel='noreferrer noopener'
          >
            Watsu Czech
          </a>
          , kde jsem po několikaletém studiu vzdělání dokončila a stala se watsu
          terapeutem.
        </p>
        <p>
          To, co dělá pro mě tuto metodu výjimečnou, je kombinace prostředí
          teplé vody, stavu bez tíže a důvěry mezi klientem a terapeutem. Je to
          pro mě zároveň velmi přirozená cesta k meditaci, k bytí v přítomnosti,
          k naslouchání tělu, cesta k tanci, který mi plynulé pohyby ve vodě
          připomínají.
        </p>
        <p>
          Při terapii kombinuji prvky z metod WATSU&reg;, OBA&reg; a
          Kraniosakrální terapie ve vodě&trade;.
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
          sizes='(max-width: 340px) 45vw,
          (max-width: 576px) 50vw,
          (max-width: 710px) 20vw,
          (max-width: 991px) 193px,
          278px'
        />
      </div>
    </SectionCard>
  );
};

export default IntroSection;
