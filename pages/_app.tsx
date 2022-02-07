import '../styles/globals.css'
import styled from 'styled-components'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import AppContext from '../public/context.js'
import Layout from '../components/Layout'
import Meta from '../components/Meta'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

  window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const StyledLayout = styled(Layout)``

function MyApp({ Component, pageProps }: AppProps) {
  const [ currentDest, setCurrentDest ] = useState(0)
  const [ currentCrew, setCurrentCrew ] = useState<number>(0)
  const [ currentTech, setCurrentTech ] = useState<number>(0)
  const { height, width } = useWindowDimensions();
  return (
    <AppContext.Provider
      value={{
        state: {
          currentDest,
          currentCrew,
          currentTech
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

