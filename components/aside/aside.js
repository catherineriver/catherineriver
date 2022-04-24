import React from 'react';
import styles from './aside.module.css'
import { useContext } from 'react';
import AppContext from '../../utils/context';
import data from '../../utils/data.json'
import Stack from '../stack/stack';
import clsx from 'clsx';

export default function Aside () {
    const { selectedLink, selectedTab, isOpenAside } = useContext(AppContext);

    return (
        <div className={clsx(styles.container, {
            [styles.isClosed]: !isOpenAside
        })}>
            {selectedTab == 2 &&
                (() => {
                    switch (selectedLink) {
                        case 1:
                            return <Stack content={data.experience[0]}/>
                        case 2:
                            return <Stack content={data.experience[1]}/>
                        case 3:
                            return <Stack content={data.experience[2]} />
                        case 4:
                            return <Stack content={data.experience[3]} />
                        case 5:
                            return <Stack content={data.experience[4]} />
                        default:
                            return null
                    }
                })()
            }
        </div>
    )
}