import styles from './Button.module.scss';

const Button = ({ href, title }) => {
  return (
    <>
      <a href={href ? href : false} className={styles.button}>
        {title}
      </a>
    </>
  );
};

export default Button;
