import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <>
          <Header />
          <main className='container'>{children}</main>
      </>
  )
}

export default Layout