import styles from './ReservationConfirmSection.module.scss';
import SectionCard from '../globals/SectionCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ReservationConfirm = () => {
  const [reservation, setReservation] = useState(null);
  const router = useRouter();
  const reservationId = router.query.reservation;
  useEffect(() => {
    if (reservationId) {
      fetch(`/api/reservation-detail?reservationId=${reservationId}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((json) => {
          setReservation(json);
        });
    }
  }, [reservationId]);

  return (
    <SectionCard mainTitle={'Termín rezervován'}>
      <h2 className={[styles.title, 'subheading'].join(' ')}>
        Děkuji Vám za rezervaci termínu
      </h2>
      <p className={styles.paragraph}>
        Vaše rezervace čeká na schválení, o jejím schválení budete v nejbližších
        dnech informováni emailem.
      </p>
      {reservation && (
        <table className={styles.reservationTable}>
          <tbody>
            <tr>
              <th>Datum</th>
              <td>
                {reservation.dayOfWeek.charAt(0).toUpperCase() +
                  reservation.dayOfWeek.slice(1)}{' '}
                {reservation.date}
              </td>
            </tr>
            <tr>
              <th>Začátek terapie</th>
              <td>{reservation.start}</td>
            </tr>
            <tr>
              <th>Stav rezervace</th>
              <td>{reservation.status}</td>
            </tr>
          </tbody>
        </table>
      )}
    </SectionCard>
  );
};

export default ReservationConfirm;
