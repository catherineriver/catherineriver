import Layout from '../components/layout/layout'
import Grid from '../components/grid/grid'
import Main from '../components/main/main'
import Menu from '../components/tabs/Tabs'
import Header from '../components/header/header'
import styles from '../styles/Home.module.css'
import Aside from '../components/aside/aside'
import { BrowserView } from 'react-device-detect'

export default function Home() {
  return (
    <Layout>
      <Grid>
        <Header />
        <Main />
        <Menu />
        <Aside />
      </Grid>
    </Layout>
  )
}
