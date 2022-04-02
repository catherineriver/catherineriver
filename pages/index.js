import Layout from '../components/layout/layout'
import Grid from '../components/grid/grid'
import Main from '../components/main/main'
import Menu from '../components/tabs/Tabs'
import Header from '../components/header/header'
import Aside from '../components/aside/aside'
import { isDesktop } from 'react-device-detect';

export default function Home() {
  return (
    <Layout>
      <Grid>
        {isDesktop && <Header />}
        <Main />
        <Menu />
        {isDesktop && <Aside />}
      </Grid>
    </Layout>
  )
}
