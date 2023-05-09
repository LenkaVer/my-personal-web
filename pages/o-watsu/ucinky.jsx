import Head from 'next/head';
import CardDetailSection from '../../components/about-watsu/CardDetailSection';
import Layout from './../../components/layout/Layout';

const Effects = () => {
  return (
    <>
      <Head>
        <title>Účinky</title>
        <meta name='description' content='Účinky watsu terapie' />
      </Head>

      <Layout>
        <CardDetailSection
          title='Účinky'
          imageSource={'/icons/effects.svg'}
          imageAlt='účinky'
        >
          {' '}
          <h2 className={'subheading'}> Vliv na cévní systém</h2>
          <ul>
            <li>Zlepšuje se žilní a lymfatický zpětný tok.</li>
            <li>Posilí se prokrvení kůže, svalů a vazivových tkání.</li>
            <li>Zvýší se prokrvení ledvin a vylučování moči.</li>
            <li>Sníží se srdeční frekvence a krevní tlak.</li>
            <li>Prohlubuje a stabilizuje se dýchání.</li>
          </ul>
          <h2 className={'subheading'}>Vliv na svalstvo a nervovou soustavu</h2>
          <ul>
            <li>
              Zlepšuje pohyblivost a snižuje napětí svalstva. Uvolněné svaly
              mohou lépe vypudit zplodiny metabolismu a tím i bolest a únavu.
            </li>
            <li>Zajišťuje to, že vazivové tkáně jsou elastické a ohebné.</li>
            <li>Klouby jsou uvolněné.</li>
            <li>Zlepšuje se držení těla a koordinace těla.</li>
            <li>Odlehčí se páteři.</li>
            <li>
              Stimuluje a aktivuje „parasympatickou nervovou soustavu“
              (autonomní nervový systém sloužící k řízení útrob, cév a některých
              dalších orgánů. Zvyšuje činnost trávicího ústrojí, vyvolává
              slinění, vylučování trávicích šťáv, zvyšuje pohyblivost trávicí
              trubice, zpomaluje srdeční činnost, zužuje průdušky, zmenšuje
              zornici (viz mióza), způsobuje erekci atd.).
            </li>
            <li>
              Odlehčuje meziobratlové ploténky a vytváří optimální podmínky pro
              nervové zakončení v jednotlivých bodech páteře.
            </li>
            <li>
              Mobilizuje protažení neurální struktury (míchy) v měkké periferii.
            </li>
          </ul>
          <h2 className={'subheading'}>Vliv duševní</h2>
          <ul>
            <li>Dochází k velmi hluboké relaxaci.</li>
            <li>Podporuje uvolněný a klidný vnitřní postoj.</li>
            <li>Působí podpůrně u duševního zpracování traumat.</li>
            <li>
              Pomáhá řešit traumata spojená s vodou, narozením a strachu z
              utonutí.
            </li>
            <li>Zlepšuje spánek.</li>
            <li>Podporuje samoléčbu těla.</li>
            <li>Pomáhá zmírnit příznaky stresu.</li>
            <li>
              Umožňuje zpřístupnění k hluboké vnitřní osobní vrstvě a zážitek
              uvolnění.
            </li>
          </ul>
          <p>
            Někteří klienti se k Watsu® dostávají s konkrétním problémem, jako
            jsou bolestivé syndromy, stavy po poranění nebo po operaci, nebo
            zvláštní omezení pohybu. Ostatní hledají Watsu® pro jeho relaxační a
            meditativní účinky, které jim poskytují volnost a klid. Klienti si
            často všimnou specifických léčebných účinků, jako jsou zvýšená
            mobilita a flexibilita, svalová relaxace, plnější a hlubší dýchání,
            snížení úzkosti a stresu na všech úrovních, snížení bolesti,
            zlepšení spánku, trávení a celkový pocit pohody. U některých klientů
            se mohou objevit emoce, nové osobní poznatky nebo návrat starých
            vzpomínek.
          </p>
        </CardDetailSection>
      </Layout>
    </>
  );
};

export default Effects;
