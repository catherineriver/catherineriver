import styles from './main.module.css'
import { useContext } from 'react';
import AppContext from '../common/context';
import Interactive from '../InteractiveContent/InteractiveContent';

export default function Main () {
    const { updatedContent, selectedTab } = useContext(AppContext)

    return <div className={styles.container}>
        {updatedContent.title && <div className={styles.title}>{updatedContent.title}</div>}
            <div className={styles.content}>
            {selectedTab === 2 
                ? <Interactive /> 
                : <div className={styles.content} dangerouslySetInnerHTML={{ __html: updatedContent.text }} />
                }
            </div>
    </div>
}