import type { NextPage } from 'next'
import { useState } from 'react'
import Meta from '../components/Meta'
import DestinationComponent from '../components/DestinationComponent'
import data from '../public/data.json'
import Image from 'next/image'

const Destinations: NextPage = () => {
    const [ currentDest, setCurrentDest ] = useState(0)
    const destinations = [ ...data.destinations ] 
  return (
    <>
        <Meta />
        <h3><span>01</span> PICK YOUR DESTINATION</h3>
        <Image src={destinations[currentDest].images.png.slice(1)} width='445' height='445' alt={`Image of ${destinations[currentDest].name}`} />
        <nav>
            <ul>
                {
                    destinations.map((dest, i) => (
                        <li onClick={() => setCurrentDest(i)} key={i}>{dest.name}</li>
                    ))
                }
            </ul>
        </nav>
        <DestinationComponent destination={destinations[currentDest]} />
    </>
  )
}

export default Destinations
