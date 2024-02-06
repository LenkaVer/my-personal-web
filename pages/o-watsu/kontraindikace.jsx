import Head from 'next/head';
import CardDetailSection from '../../components/about-watsu/CardDetailSection';
import Layout from './../../components/layout/Layout';

const Contraindication = () => {
  return (
    <>
      <Head>
        <title>Kontraindikace</title>
        <meta
          name='description'
          content='Seznamte se s kontraindikacemi pro vodní terapie. Zjistěte, které stavy nejsou vhodné pro Watsu® a další metody. Pro zdravotní bezpečnost se poraďte s lékařem.'
        />
      </Head>
      <Layout>
        <CardDetailSection
          title='Kontraindikace'
          imageSource={'/icons/contraindications.svg'}
          imageAlt='kontraindikace'
        >
          <h2 className={'subheading'}> Nevhodné stavy pro vodní terapie</h2>
          <ul>
            <li>Infekční a hořečnaté stavy.</li>
            <li>Kardiovasculární onemocnění.</li>
            <li>Akutní zápalové onemocnění.</li>
            <li>Akutní poranění kostí, kloubů, vazů.</li>
            <li>Akutní zánět močových nebo dýchacích cest.</li>
            <li>Infekce krve.</li>
            <li>Nepředvídatelná střevní nebo močová inkontinence.</li>
            <li>Otevřené rány.</li>
            <li>
              Epilepsie - obzvláště pokud je nekontrolovatelná (pravděpodobnost
              záchvatu).
            </li>
            <li>
              Diabetes – terapie je vhodná, ale je třeba věnovat zvláštní
              pozornost na čas dávkování léku.
            </li>
            <li>
              Přecitlivělost na chemické přípravky používané v bazénu (chlor,
              brom, atd.).
            </li>
            <li>Pacient po nedávném krvácení do mozku.</li>
            <li>Perforace ušního bubínku.</li>
            <li>Žilní trombóza.</li>
            <li>Tracheostomie.</li>
            <li>Autonomní disreflexie.</li>
            <li>Speciální psychologické potřeby.</li>
          </ul>
        </CardDetailSection>
      </Layout>
    </>
  );
};

export default Contraindication;
