import styles from './CardsSection.module.scss';
import AboutWatsuCard from './AboutWatsuCard';

const CardsSection = () => {
  return (
    <section className={styles.section}>
      <div className='container'>
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          O Watsu
        </h1>
        <div className={styles.wrapper}>
          <AboutWatsuCard
            title='Účinky'
            link='/o-watsu/ucinky'
            imageSource={'/icons/effects.svg'}
            imageAlt='účinky'
          >
            {' '}
            <p>
              Doplňková léčebná metoda, kde se využívá vody jako média pro
              terapeutické účely. Existuje více různých metod, ale
              nejrozšířenější je WATSU&reg; (Water Shiatsu). Díky teplu a
              vztlaku voda uvolňuje svaly, klouby a odlehčuje tělo od vlivů
              gravitace. Během terapie jsou uši klienta ponořeny pod vodou, což
              výrazně redukuje akustické vjemy z vnějšího prostředí. Klienti
              obvykle zavřou oči a terapie probíhá v tichu, případně za zvuku
              hudby, bez nutnosti mluvení s terapeutem.
            </p>
            <p>
              Tento způsob léčby umožňuje minimalizovat vlivy okolního světa a
              vytvořit meditativní prostředí, které klientovi umožňuje lépe se
              soustředit na své vnitřní pocity a myšlenky. Watsu tak nabízí
              jedinečnou příležitost pro relaxaci a sebepoznání.
            </p>
          </AboutWatsuCard>
          <AboutWatsuCard
            title='Průběh terapie'
            link='/o-watsu/prubeh-terapie'
            imageSource={'/icons/therapy.svg'}
            imageAlt='průběh terapie'
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
            title='Kontraindikace'
            link='/o-watsu/kontraindikace'
            imageSource={'/icons/contraindications.svg'}
            imageAlt='kontraindikace'
          >
            <p>
              Pokud se rozhodujete, zda jsou vodní terapie pro vás vhodné,
              můžete jako základní orientační bod zvážit, zda váš zdravotní stav
              umožňuje pobyt v teplé vodě o teplotě 34-36°C. Pokud ano,
              pravděpodobně budou pro vás Watsu&reg; a ostatní vodní terapie
              vhodné. V článku se dozvíte také o některých kontraindikacích,
              které byste měli vzít v úvahu. V případě jakýchkoli nejasností se
              poraďte se svým lékařem. Před samotnou terapií nebo rezervací
              termínu byste měli informovat terapeuta o jakýchkoli zdravotních
              problémech, včetně užívání dlouhodobé medikace, aby mohl posoudit
              vhodnost terapie a případně ji přizpůsobit vašim potřebám.
            </p>
          </AboutWatsuCard>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
