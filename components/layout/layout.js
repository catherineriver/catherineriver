import React, { useEffect } from 'react';
import styles from './layout.module.css';

export default function Layout({
  children,
}) {
  useEffect(() => {
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      typeof window !== 'undefined' && document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  });

  return (
    <div className={styles.container}>{children}</div>
  );
}
