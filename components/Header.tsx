import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header: () => JSX.Element = () => {
    const [isOpen, setIsOpen ] = useState<boolean>(false)
    const [ isActive, setIsActive ] = useState<string>('home')

  return (
    <header className="header">
        <div className="header__logo">
            <div className="logo">
                <Image 
                    src='/assets/shared/logo.svg' 
                    alt='Company logo' 
                    layout="fill"
                    objectFit='contain'
                />
            </div>
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
                <li className={`nav-list-item${isActive === 'home' ? ' nav-list-item--active' : ''}`} onClick={() => setIsOpen(false)}>
                    <Link href='/'>
                        <a className='nav-list-item__text'
                        onClick={() => setIsActive('home')}><span className='nav-list-item__text--number'>00</span>Home</a>
                    </Link>
                </li>
                <li className={`nav-list-item${isActive === 'dest' ? ' nav-list-item--active' : ''}`} onClick={() => setIsOpen(false)}>
                    <Link href='/destination'>
                        <a className='nav-list-item__text'
                        onClick={() => setIsActive('dest')}><span className='nav-list-item__text--number'>01</span>Destination</a>
                    </Link>
                </li>
                <li className={`nav-list-item${isActive === 'crew' ? ' nav-list-item--active' : ''}`} onClick={() => setIsOpen(false)}>
                    <Link href='/crew'>
                        <a className='nav-list-item__text'
                        onClick={() => setIsActive('crew')}><span className='nav-list-item__text--number'>02</span>Crew</a>
                    </Link>
                </li>
                <li className={`nav-list-item${isActive === 'tech' ? ' nav-list-item--active' : ''}`} onClick={() => setIsOpen(false)}>
                    <Link href='/technology'>
                        <a className='nav-list-item__text'
                        onClick={() => setIsActive('tech')}><span className='nav-list-item__text--number'>03</span>Technology</a>
                    </Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header