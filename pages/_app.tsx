import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import AppContext from '../public/context.js'
import Layout from '../components/Layout'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }: AppProps) {
  const [ isFreshPress, setIsFreshPress ] = useState<boolean>(false)
  const [ isDesktop, setIsDesktop ] = useState<boolean>(false)
  useEffect(() => {
    setIsDesktop(window.matchMedia(`(min-width: 1200px)`).matches) 
  },[])
  useEffect(() => { 
    const scrollGuy = document.getElementById('__next')
    if (scrollGuy && isFreshPress) scrollGuy.scrollTop = 0
    setIsFreshPress(false)
  }, [isFreshPress, setIsFreshPress])
 
  return (
    <AppContext.Provider
      value={{
        state: {
          isDesktop
        },
        setIsFreshPress
      }}
    >
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
    )
}

export default MyApp

