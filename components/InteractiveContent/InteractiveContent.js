import styles from './InteractiveContent.module.css';
import Marquee from '../marquee/marquee';

export default function InteractiveContent () {
    return (
        <div className={styles.container}>
            <p>I&apos;m currently working in <Marquee index={1}>«Intexsys»</Marquee>. As a part of an agile team, I solving seemingly unsolvable problems and constantly improve my skills.</p>
            <p>This place is my first job in an international company. Before that, I worked on media. The most challenging company was <Marquee index={2}>Komitet</Marquee>.</p>
            <p>My responsibilities were to develop and maintain marketing integrations for <a href="https://dtf.ru" rel="noreferrer" target="_blank">DTF</a>, <a href="https://vc.ru/" rel="noreferrer" target="_blank">VC</a>, and <a href="https://tjournal.ru/" rel="noreferrer" target="_blank">TJ</a>.</p>
            <p>I&apos;m proud of every project which I have done. But mine most loved - <a href="https://vc.ru/special/uralsib-tamagochi" rel="noreferrer" target="_blank">Tamagotchi of Businessman</a>, for Uralsib Bank. This project caused a battle between users. Day and night they clicked on the love/hate buttons and leaded virtual Businessmen to success.</p>
            <p>Unfortunately, special projects in this media don&apos;t live long. And many of them exist only on my GitHub now.</p>
            <p>I started my frontend developer career at <a href="https://www.strelka.com/en" rel="noreferrer" target="_blank">«Strelka Institute for Media, Architecture and Design»</a></p>
        </div>
    )}