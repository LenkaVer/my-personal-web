import styles from './PriceSection.module.scss';
import Image from 'next/image';
import { imageLoader } from '../../functions/imageLoader';

const PriceSection = ({ images }) => {
  return (
    <section className={styles.price}>
      <h2 className={[styles.title, 'titleDecoration', 'subheading'].join(' ')}>
        Cena
      </h2>
      <p>
        Terapie probíhají v Českých Budějovicích v &nbsp;
        <a
          href='http://www.sikulka.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Baby Centru Šikulka
        </a>
        &nbsp; za cenu 1.500,- Kč.
        <br /> Dále v Praze v &nbsp;
        <a
          href='https://www.plavacek-deti.cz/kurzy/praha/uvod/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Plaváčku - Slunečný vršek
        </a>
        &nbsp; za cenu 1.800,- Kč.
      </p>
      <h3 className={[styles.title, 'titleDecoration', 'subheading'].join(' ')}>
        Storno
      </h3>
      <p>
        V případě, že se nemůžete dostavit v objednaném termínu, je možné za
        sebe poslat náhradníka. Pokud ani tato možnost není realizovatelná, lze
        rezervaci bezplatně zrušit nejpozději{' '}
        <span>72 hodin před plánovaným termínem</span> . V případě zrušení méně
        než <span>72 hodin před termínem</span> je účtován storno poplatek ve
        výši <span>50 % ceny služby</span>.
      </p>

      <p className={styles.paragraphBg}>
        Terapie trvá přibližně 50-60 minut, doporučuji přijít 15 minut předem,
        abyste měli dostatek času na přípravu a ve sjednaný čas jste mohli být v
        bazénu. Na terapii je vhodné nejít těsně po jídle, ale ani hladový. S
        sebou plavky, ručník, hygienické potřeby (jako při běžné návštěvě
        bazénu), případně žabky. Po terapii je dobré mít klidnější režim, pít
        dostatek tekutin a udržovat se v teple.
      </p>
      <p>
        Na terapii je možné zakoupit <span>dárkový poukaz</span>.
      </p>
      <div className={styles.voucher}>
        <Image
          loader={imageLoader}
          src={images.voucher.hash}
          alt={images.voucher.alt}
          width={400}
          height={283}
          placeholder={'blur'}
          blurDataURL={images.voucher.base64}
        />
      </div>
    </section>
  );
};

export default PriceSection;
