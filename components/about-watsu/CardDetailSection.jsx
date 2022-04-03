import styles from './CardDetailSection.module.scss';
import SectionCard from '../globals/SectionCard';

const CardDetailSection = ({ title, imageSource, imageAlt, children }) => {
  return (
    <SectionCard mainTitle={title} extraClass={'cardDetailSection'}>
      <img className={styles.image} src={imageSource} alt={imageAlt} />
      {children}
    </SectionCard>
  );
};

export default CardDetailSection;
