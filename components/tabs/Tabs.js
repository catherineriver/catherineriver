import styles from './tabs.module.css'
import { useContext, useState } from 'react';
import AppContext from '../common/context';
import data from '../common/data.json'
import clsx from 'clsx';


export default function Tabs () {
    const { 
        isActive, setIsActive, selectedTab, setSelectedTab, setUpdatedContent
    } = useContext(AppContext)
    const changeContent = (data) => {
        setUpdatedContent(data);
    }
    const handleOpen = (data, index) => {
        setIsActive(!isActive);
        changeContent(data);
        setSelectedTab(index);
    }
    return <div className={styles.container}>
        {data.content.map((item) => {
            const index = item.index; 
            return (
                <div 
                    className={clsx(styles.menuItem, {
                        [styles.isActive]: selectedTab === index
                    })
                }
                    onClick={() => handleOpen(item, index)}
                    key={index}
                >
                <span>{item.button}</span>
            </div>
        )})}
    </div>
}