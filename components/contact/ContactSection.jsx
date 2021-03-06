import styles from './ContactSection.module.scss';
import SectionCard from '../globals/SectionCard';

const ContactSection = () => {
  return (
    <SectionCard mainTitle={'Kontakt'} extraClass={'contactSection'}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Lenka Verzichová</h2>

        <table className={styles.contactTable}>
          <tbody>
            <tr>
              <th>E-mail</th>
              <td>
                <a href="mailto:lenkaverzichova@gmail.com">
                  lenka@verzichova.cz
                </a>
              </td>
            </tr>
            <tr>
              <th>Tel.</th>
              <td>
                <a href="tel:728363010">728 363 010</a>
              </td>
            </tr>
            <tr>
              <th>IČ</th>
              <td> 11726270</td>
            </tr>
          </tbody>
        </table>

        <p className={styles.externalLink}>
          Spolupracuji s{' '}
          <a
            href="https://www.watsu-czech.cz/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Watsu Czech
          </a>
          , jsem členem Spolku Watsu Czech CZ z.s.
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.4609153079537!2d14.506827951339003!3d48.98278549979211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47734e53e86cc6b1%3A0x35ff1d7b3bb34682!2sBaby%20club%20%C5%A0ikulka%2C%20z.s.!5e0!3m2!1scs!2scz!4v1646853595515!5m2!1scs!2scz"
          width="400"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </SectionCard>
  );
};

export default ContactSection;
