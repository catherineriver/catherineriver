import styles from './stack.module.css'
import React from 'react';

export default function Stack ({content}) {

    return (
        <div className={styles.container}>
            <h4 className={styles.header}>Stack:</h4>
            <ul className={styles.list}>
            {content.stack.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )})}
            </ul>
        </div>
    )
}