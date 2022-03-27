import styles from './interactive.module.css';
import Marquee from '../marquee/marquee';

export default function Interactive () {
    return (
        <div className={styles.container}>
            <p>I work at <Marquee index={1}>Intexsys</Marquee> these days.As a part of the team, I solving seemingly unsolvable problems.Over the past year, we have implemented several projects that have brought great benefits to the business.I&apos; m part of a complex e-commerce project and I&apos;m proud of it, but I haven&apos;t always worked for a big international company.</p>
            <p>I used to work for the Russian publishing house <Marquee index={2}>Komitet</Marquee>. My task was to develop advertising integrations for media <a href="https://vc.ru/" target="_blank" rel="noreferrer">VC</a>, <a href="https://tjournal.ru/" target="_blank" rel="noreferrer">TJ</a> and <a href="https://dtf.ru/" target="_blank" rel="noreferrer">DTF</a>. The most difficult project was for URALSIB Bank, I did it alone in 2 weeks. And it was a huge success with the audience. People start a real battle trying to save businessmen from despair and broke.</p>
        </div>
    )}