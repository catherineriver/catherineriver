import styles from './marquee.module.css'
import React, { useContext } from 'react';
import AppContext from '../common/context';
import { isDesktop } from 'react-device-detect';

export default function Marquee ({ children, index }) {
    const { selectedLink, setSelectedLink, setIsOpenAside, isOpenAside } = useContext(AppContext);
    const handleSelect = (index) => {
        setSelectedLink(index);
        if (selectedLink === index && isDesktop) {
            setIsOpenAside(!isOpenAside);
        }
    }
    return (
        <span className={styles.container} onClick={() => handleSelect(index)}>
            {children}
        </span>
    )}