import styles from './main.module.css'
import { useContext } from 'react';
import AppContext from '../common/context';
import Interactive from '../interactive/interactive';
import Section from '../section/section';

export default function Main () {
    const { updatedContent, selectedTab } = useContext(AppContext)

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            {updatedContent.title && <div className={styles.title}>{updatedContent.title}</div>}
            {selectedTab === 2 
                ? <Interactive /> 
                : <Section content={updatedContent} />
            }
        </div>
    </div>
}