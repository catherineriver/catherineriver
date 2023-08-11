import React from 'react'; 
import styles from './InteractiveContent.module.css';
import TooltipHandler from '../tooltipHandler/tooltipHandler';

export default function InteractiveContent() {
  return (
    <div className={styles.container}>
        <div className={styles.block}>
          Currently, I am working at <a href="https://doxa.team" rel="noreferrer" target="_blank">DOXA</a>, where I continue to apply and expand my skills in the Vue stack. 
          Alongside my role at DOXA, I also take on freelance projects, allowing me to diversify my experience and work on a variety of exciting challenges.
        </div>
        <div className={styles.block}>
            Previously, I was a part of an agile team at <TooltipHandler index={0}>«Intexsys»</TooltipHandler>, where I tackled seemingly unsolvable problems and constantly improved my skills.
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
            Unfortunately, due to the war, the media companies I worked for were forced to shut down.
        </div>
      <div className={styles.block}>
        I&apos;m proud of every project which I have done. But mine most loved -
        <a href="https://vc.ru/special/uralsib-tamagochi" rel="noreferrer" target="_blank">Tamagotchi of Businessman</a>, 
        for Uralsib Bank. This project sparked a friendly competition among users, who clicked the love/hate buttons day and night, guiding their virtual businessmen to success.
      </div>
      <div className={styles.block}>
        Despite the closures, many of my creations live on through my GitHub.
      </div>
      <div className={styles.block}>
        <TooltipHandler index={2}>«Strelka Institute for Media, Architecture and Design»</TooltipHandler> was the place where I started my frontend developer career.
        It was great for novice. As part of team I develop from scratch <a href="https://strelkamag.com/" rel="noreferrer" target="_blank">Strelka Mag</a> magazine, CMS and bunch of internal tools.
        I got experience with unusual visual solutions and catched a love of brutalism and minimalism in design.
        My favorite project from this times is <a href="https://sovietarch.strelka.com" rel="noreferrer" target="_blank">Soviet Modernism Guide</a>.
      </div>
        <div className={styles.block}>
            Now, as a freelancer, I continue to expand my expertise and take on exciting new projects, making use of my diverse skill set with Vue, React, Nuxt, and Next.js.
            My past experiences in media and working with diverse teams have shaped my ability to adapt to new challenges, and I look forward to the opportunities that freelance work has to offer.
        </div>
    </div>
  );
}
