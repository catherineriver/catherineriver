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
};

export async function getInitialProps({ context }) {
  let isMobileView = (context.req
    ? context.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )

  return {
    isMobileView: Boolean(isMobileView)
  }
};

export default function Home ({ data, isMobileView }) {
  return (
    <Layout>
      <Grid>
        {!isMobileView && <Header />}
        <Main />
        <Tabs data={data.content}/>
        {!isMobileView && <Aside />}
      </Grid>
    </Layout>
  )
}
