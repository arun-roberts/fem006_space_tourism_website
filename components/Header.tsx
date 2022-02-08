import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header: () => JSX.Element = () => {
    const [isOpen, setIsOpen ] = useState<boolean>(false)

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
            <div className="nav__hamburger">
                <Image 
                    onClick={() => setIsOpen(true)} 
                    src='/assets/shared/icon-hamburger.svg'
                    alt='Click to open navigation'
                    layout="fill"
                    objectFit='contain'
                    className="fuckingWork"
                />
            </div>
        </div>
        <nav className={`nav ${isOpen ? 'nav--open' : 'nav--closed'}`}>
            <div className="nav__hamburger">
                <Image 
                    onClick={() => setIsOpen(false)} 
                    src='/assets/shared/icon-close.svg'
                    alt='Click to close navigation'
                    layout="fill"
                    objectFit='contain'
                    className="fuckingWork"
                />
            </div>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <Link href='/'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>00</span> Home</a>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link href='/destination'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>01</span> Destination</a>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link href='/crew'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>02</span> Crew</a>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link href='/technology'>
                        <a className='nav-list-item__text'><span className='nav-list-item__text--number'>03</span> Technology</a>
                    </Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header