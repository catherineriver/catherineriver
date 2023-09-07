import React from 'react'; 
import styles from './InteractiveContent.module.css';
import TooltipHandler from '../tooltipHandler/tooltipHandler';

export default function InteractiveContent() {
  return (
    <div className={styles.container}>
        <div className={styles.block}>
            Right now, I&rsquo;m working at&nbsp;<a href="https://www.doxa.team/" rel="noreferrer" target="_blank">DOXA</a>, diving deep into the Vue stack. It&rsquo;s also the place where I get better at design and UI.
        </div>
        <div className={styles.block}>
            One of&nbsp;my&nbsp;proudest moments with this team&nbsp;is <a href="https://noncharity.doxa.team/" rel="noreferrer" target="_blank">NonCharity</a>,
            which won the <a href="https://redkollegia.org/archives/text/neblagotvori-telnost-kak-sistema-prezidentskih-grantov-vynuzhdaet-rossijskoe-obshhestvo-obsluzhivat-vojnu" rel="noreferrer" target="_blank">Redkollegiya award</a>.
            It&rsquo;s an independent award established to support free professional journalism in Russia.
        </div>
        <div className={styles.block}>
            Additionally, I clinched a win at the <a href="https://internetborders.net/" rel="noreferrer" target="_blank">«Internet Without Borders» hackathon</a> in Tool development panel challenge from Ceno.
            For the challenge, I was tasked with redesigning and developing functionalities for a page for Ceno Browser site.
            What makes this win even more special is that it was my first-ever hackathon and my inaugural trip to Amsterdam.
        </div>
        <div className={styles.block}>
            Besides my&nbsp;day job, I&nbsp;love taking on&nbsp;freelance gigs, which gives me&nbsp;a&nbsp;chance to&nbsp;mix things up&nbsp;and face new challenges.
            Freelancing lets me play around with modern technologies and learn new ones.
        </div>
        <div className={styles.block}>
            Before joining DOXA, I was with <TooltipHandler index={0}>«Intexsys»</TooltipHandler>, an international company. Being part of their dynamic team, we tackled some tough problems, and I learned a ton.
        </div>
      <div className={styles.block}>
        This place is my first job in an international company. Before that, I worked on media.
        My most memorable time was at <TooltipHandler index={1}>«Komitet»</TooltipHandler>, where I was all about creating cool marketing integrations
        for platforms like <a href="https://dtf.ru" rel="noreferrer" target="_blank">DTF</a>, <a href="https://vc.ru/" rel="noreferrer" target="_blank">VC</a>, and <a href="https://tjournal.ru/" rel="noreferrer" target="_blank">TJ</a>.

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
            After all these experiences, I&rsquo;m still eager to learn and grow.
            Today I&rsquo;m particularly interested in advancing my skills in design and UI/UX and excited about what&rsquo;s next.
        </div>
    </div>
  );
}
