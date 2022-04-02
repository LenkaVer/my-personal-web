import styles from './NewsletterSection.module.scss';
import NewsletterCard from './NewsletterCard';
import { useState, useEffect } from 'react';

const NewsletterSection = () => {
  const [termsAvailable, setTermsAvailable] = useState(false);

  useEffect(() => {
    fetch('/api/therapy-times')
      .then((response) => response.json())
      .then((json) => {
        setTermsAvailable(json[0] ? true : false);
      });
  }, []);
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          Nové termíny e-mailem
        </h1>
        <NewsletterCard termsAvailable={termsAvailable} />
      </div>
    </section>
  );
};

export default NewsletterSection;
