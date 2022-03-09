import styles from './ContactSection.module.scss';

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          Kontakt
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Lenka Verzichová</h2>
            <p>
              <span>Email: </span>
              <a href="mailto:lenkaverzichova@gmail.com">
                lenkaverzichova@gmail.com.
              </a>
            </p>
            <p>
              <span>IČ:</span> 11726270.
            </p>
            <p>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
