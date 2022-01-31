// TYPES
import type { NextPage } from 'next'
import type { DestTypes, Dest } from '../lib/types'
// REACT IMPORTS
import { useContext } from 'react'
// NEXT IMPORTS
import Image from 'next/image'

import AppContext from '../public/context'
import Meta from '../components/Meta'
import data from '../public/data.json'


const Destination: NextPage = () => {
    const value = useContext(AppContext);
    let { currentDest } = value.state;
    const { setCurrentDest } = value
    const destinations: DestTypes = [ ...data.destinations ]
    let destination: Dest = destinations[currentDest]
  return (
    <>
        <Meta />
        <h3><span>01</span> PICK YOUR DESTINATION</h3>
        <div>
            <Image src={destination.images.png.slice(1)} width='445' height='445' alt={`Image of ${destination.name}`} />
            <nav>
                <ul>
                    {
                        destinations.map((dest, i) => (
                            <li onClick={() => setCurrentDest(i)} key={i}>{dest.name}</li>
                        ))
                    }
                </ul>
            </nav>
            <div>
                <h1>{destination.name}</h1>
                <p>{destination.description}</p>
            </div>
            <ul>
                <li>
                    <div>Avg. Distance</div>
                    <div>{destination.distance}</div>
                </li>
                <li>
                    <div>Est. Travel Time</div>
                    <div>{destination.travel}</div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Destination
