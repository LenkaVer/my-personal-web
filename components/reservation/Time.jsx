import styles from './Time.module.scss';
import Link from 'next/link';

const Time = ({ time }) => {
  return (
    <li className={styles.listItem} key={time.id}>
      <Link href={`/rezervace/${time.id}`} className={styles.listItemLink}>
        {time.start} - {time.end}
      </Link>
    </li>
  );
};

export default Time;
