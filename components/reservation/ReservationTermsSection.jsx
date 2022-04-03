import SectionCard from '../globals/SectionCard';
import TermsCard from './TermsCard';

const ReservationTermsSection = ({ images }) => {
  return (
    <SectionCard
      mainTitle={'Rezervace termínu'}
      extraClass={'reservationTermsSection'}
    >
      <TermsCard images={images} />
    </SectionCard>
  );
};

export default ReservationTermsSection;
