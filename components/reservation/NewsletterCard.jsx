import styles from "./NewsletterCard.module.scss";
import PriceSection from "./PriceSection";
import Loader from "./../globals/Loader";
import Link from "next/link";
import { useState } from "react";
import validator from "validator";

const NewsletterCard = ({ termsAvailable, loading, images }) => {
  const [email, setEmail] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const submitNewsletter = async (e) => {
    e.preventDefault();

    setBtnDisabled(true);

    if (!validator.isEmail(email)) {
      setErrorMessage("Zadejte platnou emailovou adresu.");
      setBtnDisabled(false);
      return;
    } else {
      setErrorMessage(null);
    }

    if (!gdpr) {
      setErrorMessage("Potvrďte souhlas se zpracováním osobních údajů.");
      setBtnDisabled(false);
      return;
    } else {
      setErrorMessage(null);
    }

    const response = await fetch("/api/newsletter-user", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });

    const json = await response.json();
    if (response.status !== 200) {
      setErrorMessage(json.message);
      setBtnDisabled(false);
      return;
    }
    setSuccessMessage(
      "Vaše emailová adresa byla uložena. Jakmile se objeví nové termíny, budu Vás informovat."
    );
    setBtnDisabled(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : termsAvailable ? (
        <p className={styles.paragraph}>
          Pokud jste si nevybrali žádný z aktuálně{" "}
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

      {successMessage ? (
        <div className={styles.form}>
          <p>{successMessage}</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={submitNewsletter}>
          {errorMessage && (
            <div className={styles.error}>
              <p>{errorMessage}</p>
            </div>
          )}

          <div className={styles.inputWrapper}>
            <input
              className={styles.inputEmail}
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <button type="submit" disabled={btnDisabled}>
              Odeslat
            </button>
          </div>

          <div className={styles.checkbox}>
            <label>
              <input
                type="checkbox"
                checked={gdpr}
                required
                onChange={(e) => setGdpr(e.target.checked)}
              />
              <span className={styles.checkboxLink}>
                Odesláním tohoto formuláře souhlasím se{" "}
                <Link href="/gdpr">
                  <a target="_blank">zpracováním osobních údajů</a>
                </Link>
                .
              </span>
            </label>
          </div>
        </form>
      )}
      <PriceSection images={images} />
    </>
  );
};

export default NewsletterCard;
