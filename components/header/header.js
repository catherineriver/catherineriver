import React from 'react'
import styles from './header.module.css'

export default function Header () {
    return <div className={styles.container}>
        <div className={styles.marquee}>
            <span> Hello!&nbsp;Čau!&nbsp;Privet! </span>
        </div>
    </div>
}