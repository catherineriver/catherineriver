import React from 'react'
import styles from './main.module.css'
import { useContext } from 'react';
import AppContext from '../../utils/context';
import Interactive from '../InteractiveContent/InteractiveContent';
import Section from '../section/section';

export default function Main () {
    const { updatedContent, selectedTab } = useContext(AppContext)

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            {updatedContent.title && <h1>{updatedContent.title}</h1>}
            {selectedTab === 2 
                ? <Interactive /> 
                : <Section content={updatedContent} />
            }
        </div>
    </div>
}