import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import AppContext from '../public/context.js'
import Layout from '../components/Layout'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }: AppProps) {
  const [ currentDest, setCurrentDest ] = useState<number>(0)
  const [ currentCrew, setCurrentCrew ] = useState<number>(0)
  const [ currentTech, setCurrentTech ] = useState<number>(0)
  const [ isDesktop, setIsDesktop ] = useState<boolean>(false)
  useEffect(() => {
    setIsDesktop(window.matchMedia(`(min-width: 1200px)`).matches) 
  },[])
  return (
    <AppContext.Provider
      value={{
        state: {
          currentDest,
          currentCrew,
          currentTech,
          isDesktop
        },
        setCurrentDest,
        setCurrentCrew,
        setCurrentTech
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

