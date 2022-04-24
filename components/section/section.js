import React from 'react'
import styles from './section.module.css'

export default function Section ({content}) {
    return (
        <div className={styles.conatiner}>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: content.text }}/>
            {content.contacts &&
                <div className={styles.list}>
                {content.contacts.map((item, index) => {
                    return (
                        <a
                            className={styles.link}
                            key={index}
                            href={item.link}
                        >
                            {item.title}
                        </a>
                    )
                })}
                </div>
            }
        </div>
    )}