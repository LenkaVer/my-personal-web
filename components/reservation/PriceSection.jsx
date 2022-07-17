import styles from "./PriceSection.module.scss";
import Image from "next/image";
import { imageLoader } from "../../functions/imageLoader";

const PriceSection = ({ images }) => {
  return (
    <section className={styles.price}>
      <h2 className={[styles.title, "titleDecoration", "subheading"].join(" ")}>
        Cena
      </h2>
      <p>
        Terapie probíhají v Baby Centru Šikulka (Rudolfovská 634,
        <a
          href="http://www.sikulka.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          www.sikulka.com
        </a>
        ) v Českých Budějovicích, cena je 1.100,- Kč.
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
          placeholder={"blur"}
          blurDataURL={images.voucher.base64}
        />
      </div>
    </section>
  );
};

export default PriceSection;
