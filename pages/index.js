import Layout from '../components/layout/layout'
import Grid from '../components/grid/grid'
import Main from '../components/main/main'
import Tabs from '../components/tabs/Tabs'
import Header from '../components/header/header'
import Aside from '../components/aside/aside'
import { getData } from '../utils/getData'

export async function getStaticProps () {
  const data = getData()
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <Layout>
      <Grid>
        <Header />
        <Main />
        <Tabs data={data.content}/>
        <Aside />
      </Grid>
    </Layout>
  )
}
