import styles from './CardsSection.module.scss';
import AboutWatsuCard from './AboutWatsuCard';

const CardsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          O Watsu
        </h1>
        <div className={styles.wrapper}>
          <AboutWatsuCard
            title="Účinky"
            link="/o-watsu/ucinky"
            imageSource={'/icons/effects.svg'}
            imageAlt="účinky"
          >
            {' '}
            <p>
              Vodní terapie s tělem jsou doplňkovou léčebnou metodou, kde se
              jako médium využívá voda. Zahrnuje různé metody. Hlavní a
              nejrozšířenější je WATSU&reg; (Water Shiatsu). Vztlak a teplo
              uvolňují svaly, klouby a oprošťují tělo od vlivů gravitace. Uši
              klienta jsou během terapie pod vodou, čímž jsou z vnějšku silně
              redukované akustické vjemy. Klient zpravidla sám uzavře při
              terapii oči a tak neprobíhá žádný rozhovor mezi terapeutem a
              klientem.
            </p>
            <p>
              Minimální vlivy zvenčí navodí tak meditativní stav, což usnadní
              přístup sama k sobě.
            </p>
          </AboutWatsuCard>
          <AboutWatsuCard
            title="Průběh terapie"
            link="/o-watsu/prubeh-terapie"
            imageSource={'/icons/therapy.svg'}
            imageAlt="průběh terapie"
          >
            <p>
              Terapie trvá přibližně 50-60 minut. Je vhodné nejít těsně po
              jídle, ale ani hladový. S sebou plavky, ručník, hygienické potřeby
              (jako při běžné návštěvě bazénu), případně žabky. Po terapii je
              dobré mít klidnější režim, pít dostatek tekutin a udržovat se v
              teple.
            </p>
          </AboutWatsuCard>
          <AboutWatsuCard
            title="Kontraindikace"
            link="/o-watsu/kontraindikace"
            imageSource={'/icons/contraindications.svg'}
            imageAlt="kontraindikace"
          >
            <p>
              Pokud váháte, jestli jsou pro Vás vodní terapie vhodné, jako
              základní vodítko může pomoci uvědomit si, jestli váš zdravotní
              stav dovoluje pobyt v teplé vodě 34-36°C. Pokud ano, pravděpodobně
              jsou pro vás Watsu&reg; a ostatní vodní terapie vhodné. Dále v
              článku si můžete přečíst vybrané kontraindikace. V případě
              nejasností se poraďte se svým lékařem, o jakýchkoli zdravotních
              problémech (i užití dlouhodobé medikace) však vždy informujte také
              před samotnou terapií (případně před rezervací termínu), pro
              posouzení vhodnosti terapie a případně její přizpůsobení Vašim
              potřebám.
            </p>
          </AboutWatsuCard>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
