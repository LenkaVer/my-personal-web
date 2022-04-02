import styles from './NewsletterCard.module.scss';
import Link from 'next/link';

const NewsletterCard = ({ termsAvailable }) => {
  const submitNewsletter = async (event) => {};
  return (
    <div className={styles.wrapper}>
      {termsAvailable ? (
        <p className={styles.paragraph}>
          Pokud jste si nevybrali žádný z aktuálně{' '}
          <Link href="/rezervace">
            <a>dostupných termínů</a>
          </Link>
          , můžete vyplnit formulář níže pro zasílání upozornění o vypsání
          nových termínů.
        </p>
      ) : (
        <>
          <p className={styles.paragraph}>
            Momentálně nejsou dostupné žádné volné termíny.
          </p>
          <p className={styles.paragraph}>
            Pokud chcete zasílat informaci o vypsání nových termínů emailem,
            vyplňte formulář níže.
          </p>
        </>
      )}

      <form className={styles.form} onSubmit={submitNewsletter}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputEmail}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <button type="submit">Odeslat</button>
        </div>
        <div className={styles.checkbox}>
          <label>
            <input type="checkbox" required />
            <span className={styles.checkboxLink}>
              Odesláním tohoto formuláře souhlasím se{' '}
              <Link href="/gdpr">
                <a>zpracováním osobních údajů</a>
              </Link>
              .
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default NewsletterCard;
