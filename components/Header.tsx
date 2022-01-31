import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'

const Header: () => JSX.Element = () => {

  return (
    <>
        <div>
            <Image src='/assets/shared/logo.svg' alt='Company logo' width='100' height='100' />
        </div>
        <nav className='nav'>
            <ul>
                <li>
                    <Link href='/'>
                        <a>00 Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/destination'>
                        <a>01 Destination</a>
                    </Link>
                </li>
                <li>
                    <Link href='/crew'>
                        <a>02 Crew</a>
                    </Link>
                </li>
                <li>
                    <Link href='/technology'>
                        <a>03 Technology</a>
                    </Link>
                </li>

            </ul>
        </nav>
    </>
  )
}

export default Header