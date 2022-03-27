import styles from './header.module.css'

export default function Header () {
    return <div className={styles.container}>
        <div className={styles.marquee}>
            <span>Hello! Čau! Privet!</span>
        </div>
    </div>
}