import styles from './Form.module.scss';
import Link from 'next/link';
import validator from 'validator';
import { useState, useEffect } from 'react';
import Router from 'next/router';

const Form = ({ termId }) => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`/api/therapy-time?termId=${termId}`)
      .then((response) => {
        if (response.status !== 200) {
          Router.push('/rezervace');
        } else {
          return response.json();
        }
      })
      .then((json) => {
        setSelectedTerm(json);
      });
  }, [termId]);

  const createReservation = async (e) => {
    e.preventDefault();

    setBtnDisabled(true);

    if (!validator.isEmail(email)) {
      setErrorMessage('Zadejte platnou emailovou adresu.');
      setBtnDisabled(false);
      return;
    } else {
      setErrorMessage(null);
    }

    if (!validator.isMobilePhone(phone)) {
      setErrorMessage('Zadejte platné telefonní číslo.');
      setBtnDisabled(false);
      return;
    } else {
      setErrorMessage(null);
    }

    if (userName.length < 1) {
      setErrorMessage('Zadejte jméno.');
      setBtnDisabled(false);
      return;
    } else {
      setErrorMessage(null);
    }

    if (userSurname.length < 1) {
      setErrorMessage('Zadejte příjmení.');
      setBtnDisabled(false);
      return;
    } else {
      setErrorMessage(null);
    }

    const response = await fetch('/api/create-reservation', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: userName,
        surname: userSurname,
        phone: phone,
        therapyTimeId: termId,
      }),
    });

    const json = await response.json();
    if (response.status !== 200) {
      setErrorMessage(json.message);
      setBtnDisabled(false);
      return;
    }
    Router.push({
      pathname: '/rezervace/potvrzeni-rezervace',
      query: {
        reservation: json.reservationId,
      },
    });

    setBtnDisabled(false);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          Rezervace termínu
        </h1>
        {selectedTerm ? (
          <>
            <div className={styles.wrapper}>
              <h2 className={[styles.title, 'sectionHeading'].join(' ')}>
                <span>{selectedTerm.date}</span> {selectedTerm.start}-
                {selectedTerm.end}
              </h2>

              <form className={styles.form} onSubmit={createReservation}>
                {errorMessage && (
                  <div className={styles.error}>
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className={styles.inputForm}>
                  <label htmlFor="name">
                    Jméno: <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={userName}
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className={styles.inputForm}>
                  <label htmlFor="surname">
                    Příjmení: <span>*</span>
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    value={userSurname}
                    required
                    onChange={(e) => setUserSurname(e.target.value)}
                  />
                </div>
                <div className={styles.inputForm}>
                  <label htmlFor="email">
                    Email: <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputForm}>
                  <label htmlFor="phone">
                    Telefon: <span>*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <p className={styles.paragraph}>
                  Položky označené <span>*</span> jsou povinné.
                </p>
                <p className={styles.paragraph}>
                  Odesláním tohoto formuláře souhlasím se{' '}
                  <Link href="/gdpr">
                    <a target="_blank">zpracováním osobních údajů</a>
                  </Link>
                  .
                </p>
                <button
                  className={styles.btn}
                  type="submit"
                  disabled={btnDisabled}
                >
                  Rezervovat termín
                </button>
              </form>

              <div className={styles.price}>
                <h2
                  className={[
                    styles.title,
                    'titleDecoration',
                    'subheading',
                  ].join(' ')}
                >
                  Cena
                </h2>
                <p>
                  Terapie probíhají v Baby Centru Šikulka (Rudolfovská 634,
                  <a
                    href="http://www.sikulka.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    www.sikulka.com
                  </a>
                  ) v Českých Budějovicích, cena je 1.100,- Kč.
                </p>
                <p className={styles.paragraphBg}>
                  Terapie trvá přibližně 50-60 minut, doporučuji přijít 15 minut
                  předem, abyste měli dostatek času na přípravu a ve sjednaný
                  čas jste mohli být v bazénu. Na terapii je vhodné nejít těsně
                  po jídle, ale ani hladový. S sebou plavky, ručník, hygienické
                  potřeby (jako při běžné návštěvě bazénu), případně žabky. Po
                  terapii je dobré mít klidnější režim, pít dostatek tekutin a
                  udržovat se v teple.
                </p>
                <p>
                  Na terapii je možné zakoupit <span>dárkový poukaz</span>.
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Form;
