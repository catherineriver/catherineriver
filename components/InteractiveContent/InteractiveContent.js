import React from 'react'; 
import styles from './InteractiveContent.module.css';
import TooltipHandler from '../tooltipHandler/tooltipHandler';

export default function InteractiveContent() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        I&apos;m currently working in&nbsp;<TooltipHandler index={0}>«Intexsys»</TooltipHandler>. As a part of an agile team, I solving seemingly unsolvable problems and constantly improve my skills.
      </div>
      <div className={styles.block}>
        This place is my first job in an international company. Before that, I worked on media. The most challenging company was&nbsp;
        <TooltipHandler index={1}>«Komitet»</TooltipHandler>.
      </div>
      <div className={styles.block}>
        My responsibilities were to develop and maintain marketing integrations for&nbsp;
        <a href="https://dtf.ru" rel="noreferrer" target="_blank">DTF</a>,&nbsp;
        <a href="https://vc.ru/" rel="noreferrer" target="_blank">VC</a>, and &nbsp;
        <a href="https://tjournal.ru/" rel="noreferrer" target="_blank">TJ</a>.
      </div>
      <div className={styles.block}>
        I&apos;m proud of every project which I have done. But mine most loved -
        <a href="https://vc.ru/special/uralsib-tamagochi" rel="noreferrer" target="_blank">Tamagotchi of Businessman</a>, 
        for Uralsib Bank. This project caused a battle between users. Day and night they clicked on the love/hate buttons and leaded virtual Businessmen to success.
      </div>
      <div className={styles.block}>
        Unfortunately, special projects in this media don&apos;t live long. 
        And many of them exist only on my GitHub now.
      </div>
      <div className={styles.block}>
        <TooltipHandler index={2}>«Strelka Institute for Media, Architecture and Design»</TooltipHandler> was the place where I started my frontend developer career.
        It was great for novice. As part of team I develop from scratch <a href="https://strelkamag.com/" rel="noreferrer" target="_blank">Strelka Mag</a> magazine, CMS and bunch of internal tools.
        I got experience with unusual visual solutions and catched a love of brutalism and minimalism in design.
        My favorite project from this times is <a href="https://sovietarch.strelka.com" rel="noreferrer" target="_blank">Soviet Modernism Guide</a>.
      </div>
    </div>
  );
}
