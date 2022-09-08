import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { IconComp } from '../IconComp/IconComp';
import { useScrollY } from '../../../hooks/useScrollY';
import styles from './UpButton.module.scss';

export const UpButton = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
      <IconComp icon="UpIcon" aria-label="Go up" size={20} onClick={scrollToTop} />
    </motion.div>
  );
};
