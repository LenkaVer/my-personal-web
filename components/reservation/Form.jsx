import styles from './Form.module.scss';
import PriceSection from './PriceSection';
import Link from 'next/link';
import Loader from './../globals/Loader';
import validator from 'validator';
import SectionCard from '../globals/SectionCard';
import { useState, useEffect } from 'react';
import Router from 'next/router';

const Form = ({ termId, images }) => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userData, setUserData] = useState({});
  const handleChangeUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    const data = localStorage.getItem('userData');
    setUserData(data ? JSON.parse(data) : {});
  };

  useEffect(() => {
    const data = localStorage.getItem('userData');
    setUserData(data ? JSON.parse(data) : {});
  }, []);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setUserSurname(userData.surname);
      setEmail(userData.email);
      setPhone(userData.phone);
    }
  }, [userData]);

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
    <SectionCard mainTitle={'Rezervace termínu'}>
      {selectedTerm ? (
        <>
          <h2 className={[styles.title, 'sectionHeading'].join(' ')}>
            <span>{selectedTerm.date}</span> {selectedTerm.start}-
            {selectedTerm.end}
          </h2>

          {selectedTerm?.city ? (
            <div className={styles.adress}>
              <p>
                <strong>{selectedTerm.city.name}</strong> <br />
                <strong>Cena: {selectedTerm.city.price},- Kč</strong>
              </p>
              <p>
                {selectedTerm.city.addressLine1 && (
                  <>
                    {selectedTerm.city.addressLine1} <br />
                  </>
                )}
                {selectedTerm.city.addressLine2 && (
                  <>
                    {selectedTerm.city.addressLine2} <br />
                  </>
                )}
                {selectedTerm.city.addressLine3 && (
                  <>
                    {selectedTerm.city.addressLine3} <br />
                  </>
                )}
              </p>
            </div>
          ) : null}

          <form className={styles.form} onSubmit={createReservation}>
            {errorMessage && (
              <div className={styles.error}>
                <p>{errorMessage}</p>
              </div>
            )}

            <div className={styles.inputForm}>
              <label htmlFor='name'>
                Jméno: <span>*</span>
              </label>
              <input
                id='name'
                name='name'
                type='text'
                value={userName}
                required
                onChange={(e) => {
                  userData.name = e.target.value;
                  handleChangeUserData(userData);
                }}
              />
            </div>
            <div className={styles.inputForm}>
              <label htmlFor='surname'>
                Příjmení: <span>*</span>
              </label>
              <input
                id='surname'
                name='surname'
                type='text'
                value={userSurname}
                required
                onChange={(e) => {
                  userData.surname = e.target.value;
                  handleChangeUserData(userData);
                }}
              />
            </div>
            <div className={styles.inputForm}>
              <label htmlFor='email'>
                Email: <span>*</span>
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={email}
                onChange={(e) => {
                  userData.email = e.target.value;
                  handleChangeUserData(userData);
                }}
              />
            </div>
            <div className={styles.inputForm}>
              <label htmlFor='phone'>
                Telefon: <span>*</span>
              </label>
              <input
                id='phone'
                name='phone'
                type='tel'
                required
                value={phone}
                onChange={(e) => {
                  userData.phone = e.target.value;
                  handleChangeUserData(userData);
                }}
              />
            </div>
            <p className={styles.paragraph}>
              Položky označené <span>*</span> jsou povinné.
            </p>
            <p className={styles.paragraph}>
              Odesláním tohoto formuláře souhlasím se{' '}
              <Link href='/gdpr' target='_blank'>
                zpracováním osobních údajů
              </Link>
              .
            </p>
            <button className={styles.btn} type='submit' disabled={btnDisabled}>
              Rezervovat termín
            </button>
          </form>

          <PriceSection images={images} />
        </>
      ) : (
        <Loader />
      )}
    </SectionCard>
  );
};

export default Form;
