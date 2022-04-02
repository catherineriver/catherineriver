import styles from './layout.module.css'
import { useEffect } from 'react';

export default function Layout({
  children
}) {

  useEffect(() => {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      typeof window !== 'undefined' && document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  });

  return (
    <div className={styles.container}> {children} </div>
  )
}