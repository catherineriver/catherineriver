import styles from './marquee.module.css'
import React, { useContext } from 'react';
import AppContext from '../common/context';

export default function Marquee ({ children, index }) {
    const { selectedLink, setSelectedLink, setIsOpenAside, isOpenAside } = useContext(AppContext);
    const handleSelect = (index) => {
        setSelectedLink(index);
        if (selectedLink === index) {
            setIsOpenAside(!isOpenAside);
        }
    }
    return (
        <span className={styles.container} onClick={() => handleSelect(index)}>
            {children}
        </span>
    )}