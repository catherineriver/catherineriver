import styles from './section.module.css'
import Marquee from '../marquee/marquee';

export default function Section ({content}) {
    return (
        <div className={styles.content}>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: content.text }}/>
            <div className={styles.list}>
            {content.contacts && content.contacts.map((item, index) => {
                return (
                    <a
                        className={styles.link}
                        key={index}
                        href={item.link}
                    >
                        {item.title}
                    </a>
                )
            })}
            </div>
            </div>
    )}