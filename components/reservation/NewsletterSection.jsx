import NewsletterCard from './NewsletterCard';
import SectionCard from '../globals/SectionCard';
import { useState, useEffect } from 'react';

const NewsletterSection = () => {
  const [termsAvailable, setTermsAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/therapy-times')
      .then((response) => response.json())
      .then((json) => {
        setTermsAvailable(json[0] ? true : false);
        setLoading(false);
      });
  }, []);
  return (
    <SectionCard mainTitle={'Nové termíny e-mailem'}>
      <NewsletterCard termsAvailable={termsAvailable} loading={loading} />
    </SectionCard>
  );
};

export default NewsletterSection;
