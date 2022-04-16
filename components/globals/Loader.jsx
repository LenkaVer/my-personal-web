import { motion } from 'framer-motion';
import styles from './Loader.module.scss';

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const DotTransition = {
  duration: 0.7,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.container}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className={styles.dot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={styles.dot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={styles.dot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
