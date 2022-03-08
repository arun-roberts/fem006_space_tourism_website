import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import AppContext from '../public/context'

const Header: () => JSX.Element = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ isActive, setIsActive ] = useState<string>('')
    const value = useContext(AppContext);
    const { setIsFreshPress } = value
    const router = useRouter()
    useEffect(() => {setIsActive(router.pathname.length > 1 ? router.pathname.split('/')[1] : 'home')}, [router.pathname])

  return (
    <header className="header">
        <div className="header__logo">
            <Link href='/'>
                <a className="logo">
                    <Image 
                        src='/assets/shared/logo.svg' 
                        alt='Company logo' 
                        layout="fill"
                        objectFit='contain'
                    />
                </a>
            </Link>
            <div className="header__hamburger">
                <Image 
                    onClick={() => setIsOpen(true)} 
                    src='/assets/shared/icon-hamburger.svg'
                    alt='Click to open navigation'
                    layout="fill"
                    objectFit='contain'
                />
            </div>
        </div>
        <div className="header__decorative-line"></div>
        <div className={isOpen ? "nav__exit-block" : ''} onClick={() => setIsOpen(false)}></div>
        <nav className={`nav ${isOpen ? 'nav--open' : 'nav--closed'}`}>
            <div className="nav__exit">
                <Image 
                    onClick={() => setIsOpen(false)} 
                    src='/assets/shared/icon-close.svg'
                    alt='Click to close navigation'
                    layout="fill"
                    objectFit='contain'
                />
            </div>
            <ul className='nav-list'>
                <li 
                    className={`nav-list-item${isActive === 'home' ? ' nav-list-item--active' : ''}`} 
                    onClick={() => {
                        setIsOpen(false)
                        setIsFreshPress(true)
                    }}
                >
                    <Link href='/'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>00</span>Home</a>
                    </Link>
                </li>
                <li 
                    className={`nav-list-item${isActive === 'destination' ? ' nav-list-item--active' : ''}`} 
                    onClick={() => {
                        setIsOpen(false)
                        setIsFreshPress(true)
                    }}
                >
                    <Link href='/destination'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>01</span>Destination</a>
                    </Link>
                </li>
                <li 
                    className={`nav-list-item${isActive === 'crew' ? ' nav-list-item--active' : ''}`}
                    onClick={() => {
                        setIsOpen(false)
                        setIsFreshPress(true)
                    }}
                >
                    <Link href='/crew'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>02</span>Crew</a>
                    </Link>
                </li>
                <li 
                    className={`nav-list-item${isActive === 'technology' ? ' nav-list-item--active' : ''}`} 
                    onClick={() => {
                        setIsOpen(false)
                        setIsFreshPress(true)
                    }}
                >
                    <Link href='/technology'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>03</span>Technology</a>
                    </Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header