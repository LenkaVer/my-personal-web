import Head from 'next/head';
import CardDetailSection from '../../components/about-watsu/CardDetailSection';
import Layout from './../../components/layout/Layout';

const Therapy = () => {
  return (
    <>
      <Head>
        <title>Průběh terapie</title>
        <meta
          name='description'
          content='Připravte se na terapii Watsu®: doporučení před terapií, průběh ve vodě a ukončení. Získáte přehled o postupech a co očekávat při relaxačním zážitku ve vodě.'
        />
      </Head>
      <Layout>
        <CardDetailSection
          title='Průběh terapie'
          imageSource={'/icons/therapy.svg'}
          imageAlt='průběh terapie'
        >
          <h2 className={'subheading'}>Před terapií</h2>
          <ul>
            <li>Zvolte si pro Vás vhodnou hodinu terapie, udělejte si čas.</li>
            <li>
              Terapie trvá 50-60minut. S sebou potřebujete plavky, ručník,
              mýdlo, případně žabky.
            </li>
            <li>
              Na začátku probereme průběh terapie a případně odpovím na
              jakékoliv Vaše dotazy.
            </li>
          </ul>
          <h2 className={'subheading'}>Ve vodě</h2>
          <ul>
            <li>
              Ve vodě budete mít vyváženy nohy pomocí plováků, aby se zabránilo
              jejich potápění během terapie.
            </li>
            <li>
              Po celou dobu terapie budete mít podporovanou hlavu, která bude
              nad hladinou a buď dolní části zad, nebo části nohou. Během
              terapie budete jemně taženi skrz vodu kontinuálním pohybem po
              hladině, s přidáváním různých technik protažení, uvolnění, rotací,
              bodových tlaků a masáží dle vhodnosti.
            </li>
            <li>
              Uši budou většinou pod vodou, nos a ústa vždy nad vodou.
              {/* Klienti, kteří mají ušní problémy nebo mají obavy ze zalehnutí
              ušních dutin na začátku terapie toto oznámí a bude jim umožněno
              použít ucpávky uší, nebo použití ušních olejových kapek. */}
            </li>
            <li>
              Někdy je možné, že klient usne, jindy opačně vnímá všechny pohyby
              během terapie, obojí je v pořádku. Neexistuje žádný dobrý nebo
              špatný způsob, jak získat správně Watsu&reg;.
            </li>
            <li>
              Většina klientů má po dobu terapie zavřené oči, ale není to
              podmínkou.
            </li>
            <li>
              V jakékoli fázi terapie, pokud Vám bude něco nepříjemné, nebo
              budete mít špatný pocit, můžete požádat o přerušení terapie.
            </li>
          </ul>
          <h2 className={'subheading'}>Dokončení</h2>
          <ul>
            <li>
              Na konci terapie budete opět postaveni do vzpřímené stabilní
              polohy u stěny bazénu a budete mít podporu, dokud nebudete
              připraveni se sami udržet ve stabilní pozici. Poté odstoupím dále
              a nechám Vám volný prostor. Někteří lidé poté rádi tiše sedí u
              zdi, nebo jen tak plavou v bazénu, jiní si chtějí popovídat o
              svých pocitech a zkušenostech z terapie. Vše je v pořádku.
            </li>
            <li>
              Po terapii je vhodné mít volný režim, nikam nespěchat, dopřát si
              klid, udržovat se v teple (neprochladnout, především chránit ušit)
              a pít trochu více vody.
            </li>
          </ul>
        </CardDetailSection>
      </Layout>
    </>
  );
};

export default Therapy;
