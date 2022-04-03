import NewsletterCard from './NewsletterCard';
import SectionCard from '../globals/SectionCard';
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
    <SectionCard mainTitle={'Nové termíny e-mailem'}>
      <NewsletterCard termsAvailable={termsAvailable} />
    </SectionCard>
  );
};

export default NewsletterSection;
