import styles from './GdprSection.module.scss';
import SectionCard from '../globals/SectionCard';
const GdprSection = () => {
  return (
    <SectionCard mainTitle={'Ochrana osobních údajů'}>
      <p>
        Provozovatelem internetových stránek watsu.verzichova.cz (dále jen
        „Web“) je Ing. Lenka Verzichová, IČ: 11726270 (dále jen „Provozovatel“).
      </p>
      <ul className={styles.list}>
        <li>
          Uživatel po vyplnění jakéhokoliv formuláře souhlasí se shromažďováním,
          uchováním a zpracováním osobních údajů poskytnutých na tomto Webu
          Provozovatelem.
        </li>
        <li>
          Provozovatel je oprávněn zpracovávat osobní údaje uživatelů v rozsahu
          nezbytném pro využívání nabízených služeb na Webu. Provozovatel se
          zavazuje s těmito údaji nakládat v souladu s platnými právními
          předpisy, a užívat je pouze v rozsahu nezbytném pro naplnění účelu,
          pro který jsou tyto údaje získávány, a vždy tak, aby zamezil jakékoliv
          újmě subjektu těchto údajů.
        </li>
        <li>
          Provozovatel zpracovává osobní údaje jakožto správce v souladu se
          zákonem č. 101/2000 Sb., o ochraně osobních údajů, v platném znění.
        </li>
        <li>
          Osobní údaje poskytnuté vyplněním formuláře na tomto Webu jsou
          zpracovány za účelem zpracování konkrétní nabídky služeb, jakož i za
          účelem dalšího nabízení služeb subjektům údajů. Tyto osobní údaje
          Provozovatel shromažďuje prostřednictvím online formuláře v rozsahu
          jméno a příjmení, kontaktní údaje (email, telefon).
        </li>
        <li>
          Osobní údaje pro výše uvedené účely jsou zpracovávány pouze po dobu
          nezbytně nutnou k naplnění těchto účelů, a to automatizovaně i
          manuálně. Provozovatel nepověří zpracováním osobních údajů třetí
          osobu. Subjekt údajů poskytuje výše uvedené osobní údaje pro stanovené
          účely dobrovolně.
        </li>
        <li>
          Subjekt údajů má v souladu s ustanovením §12 a 21 zákona o ochraně
          osobních údajů zejména právo přístupu k osobním údajům, právo na
          poskytnutí vysvětlení a právo na nápravu (jako např. blokování,
          provedení opravy, doplnění nebo likvidace osobních údajů), k tomuto
          účelu slouží email{' '}
          <a href="mailto:lenka@verzichova.cz">lenka@verzichova.cz</a>.
        </li>
      </ul>
    </SectionCard>
  );
};

export default GdprSection;
