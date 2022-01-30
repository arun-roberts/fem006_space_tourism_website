import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
