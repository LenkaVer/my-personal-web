import styles from './TermsSection.module.scss';
import SectionCard from '../globals/SectionCard';
import Link from 'next/link';

const TermsSection = () => {
  return (
    <SectionCard mainTitle={'Obchodní podmínky'} extraClass={'termsSection'}>
      <h2>1. Poskytovatel služby</h2>
      <p>
        Poskytovatel: Lenka Verzichová <br />
        Adresa: Hlaváčova 1161/8, Praha, 182 00
        <br /> IČ: 11726270 <br />
        Telefon: <a href='tel:+420728363010'>728 363 010</a>
        <br /> E-mail:{' '}
        <a href='mailto:lenkaverzichova@gmail.com'> lenka@verzichova.cz</a>
      </p>
      <p>
        Zapsána v živnostenském rejstříku vedeném Úřadem městské části Praha 8.
      </p>
      <h2>2. Předmět obchodních podmínek</h2>
      <p>
        Tyto obchodní podmínky upravují podmínky poskytování služby Watsu,
        způsob objednávání, platební podmínky, storno a reklamace služeb mezi
        poskytovatelem a klientem.
      </p>
      <h2>3. Objednávka služby a rezervace</h2>
      <ul className={styles.list}>
        <li>
          Službu lze objednat přes rezervační systém na webu nebo
          telefonicky/e-mailem.
        </li>
        <li>Odesláním rezervace souhlasíš s těmito obchodními podmínkami.</li>
        <li>Rezervace je platná po potvrzení ze strany poskytovatele.</li>
        <li>
          Poskytovatel si vyhrazuje právo odmítnout rezervaci bez udání důvodu.
          Například v případě naplněné kapacity, zdravotní kontraindikace nebo
          jiných okolností, které by mohly ovlivnit bezpečné poskytnutí služby.
        </li>
      </ul>
      <h2>4. Cena služby a platební podmínky</h2>
      <ul className={styles.list}>
        <li>
          Ceny služeb jsou uvedeny na <Link href='/rezervace'>webu</Link> a jsou
          konečné.
        </li>
        <li>
          Platba probíhá předem nebo na místě po ukončení služby dle dohody.
        </li>
        <li>
          V případě platby převodem je služba rezervována po připsání částky na
          účet poskytovatele.
        </li>
        <li>Nejsem plátce DPH podle zákona o dani z přidané hodnoty.</li>
      </ul>
      <h2>5. Storno a změna rezervace</h2>
      <ul className={styles.list}>
        <li>
          Klient může rezervaci zrušit nebo změnit nejpozději 72 hodin předem
          bez poplatku.
        </li>
        <li>
          Při pozdějším storno si poskytovatel vyhrazuje právo účtovat storno
          poplatek ve výši 50{'\u00A0'}% z ceny služby, který pokrývá vzniklé
          náklady spojené s přípravou služby.
        </li>
        <li>
          Neomluvená nepřítomnost se považuje za storno a účtuje se 100
          {'\u00A0'}% ceny služby.
        </li>
        <li>
          Klient má možnost poslat na svůj termín náhradníka, který službu
          využije místo něj, v tom případě storno poplatek není účtován.
        </li>
      </ul>
      <h2>6. Práva a povinnosti klienta</h2>
      <ul className={styles.list}>
        <li>
          Klient je povinen dodržovat hygienická pravidla a instrukce
          poskytovatele.
        </li>
        <li>
          Klient je povinen informovat poskytovatele o zdravotním stavu, který
          by mohl ovlivnit bezpečné provedení služby Watsu.
        </li>
        <li>
          Klient je odpovědný za dodržování dohodnutých termínů a podmínek
          služby.
        </li>
      </ul>
      <h2>7. Odpovědnost poskytovatele</h2>
      <ul className={styles.list}>
        <li>
          Poskytovatel nenese odpovědnost za újmu vzniklou nedodržením instrukcí
          klientem nebo neposkytnutím pravdivých informací o zdravotním stavu.
        </li>
        <li>
          Poskytovatel si vyhrazuje právo na změnu termínu nebo zrušení
          rezervace v případě nečekaných událostí.
        </li>
        <li>
          V případě zrušení služby ze strany poskytovatele má klient nárok na
          vrácení uhrazené částky.
        </li>
        <li>
          Poskytovatel je odpovědný za kvalitu služby v souladu s odbornými
          standardy.
        </li>
      </ul>
      <h2>8. Reklamace</h2>
      <ul className={styles.list}>
        <li>
          {' '}
          Reklamace se podávají e-mailem nebo telefonicky do 14 dnů od
          poskytnutí služby.
        </li>
        <li>Poskytovatel se zavazuje reklamaci vyřídit do 30 dnů.</li>
        <li>
          Reklamace se řeší individuálně podle charakteru poskytované služby.
        </li>
      </ul>

      <h2>9. Odkaz na zpracování osobních údajů</h2>
      <ul className={styles.list}>
        <li>
          {' '}
          Zpracování osobních údajů klientů je upraveno samostatnou stránkou{' '}
          <Link href='/gdpr'>Ochrana osobních údajů</Link>.
        </li>
      </ul>

      <h2>10. Změny obchodních podmínek</h2>
      <ul className={styles.list}>
        <li>Poskytovatel si vyhrazuje právo měnit obchodní podmínky.</li>
        <li>
          Aktuální znění je vždy dostupné na webu{' '}
          <Link href='/'>watsu.verzichova.cz</Link>.
        </li>
      </ul>
    </SectionCard>
  );
};

export default TermsSection;
