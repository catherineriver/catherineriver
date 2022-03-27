import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({
  children
}) {
  return (<>
      <Head>
          <title>Ekaterina Baliasnikova</title>
      </Head>
      <div className={styles.container}> {children} </div>
  </>)
}