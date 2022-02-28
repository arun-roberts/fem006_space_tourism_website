// TYPES
import type { NextPage } from 'next'
import type { DestTypes, Dest } from '../lib/types'
// REACT IMPORTS
import { useContext, useEffect } from 'react'
// NEXT IMPORTS
import Image from 'next/image'
import { useRouter } from 'next/router'

import AppContext from '../public/context'
import Meta from '../components/Meta'
import data from '../public/data.json'
import ContentPicker from '../components/ContentPicker'


const Destination: NextPage = () => {
    const value = useContext(AppContext);
    let { currentDest } = value.state;
    const { setCurrentDest }: { setCurrentDest: React.Dispatch<React.SetStateAction<number>>} = value
    const destinations: DestTypes = [ ...data.destinations ]
    const destArray: string[] = data.destinations.map(e => e.name)
    let destination: Dest = destinations[currentDest]
    const router = useRouter();
    useEffect(() => {
        const onHashChangeStart = (url: string) => {
            let hash: string = url.slice(url.indexOf('#') + 1)
            let i: number = destArray.findIndex(e => e == hash)
            setCurrentDest(i == -1 ? 0 : i)
        };

        router.events.on("hashChangeStart", onHashChangeStart);

        return () => {
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [router.events, setCurrentDest, destArray]);
    // useLayoutEffect(() => {
    //     let asPath = router.asPath.split('/')[2] || 'moon'
    //     setCurrentDest(destinationsArray.indexOf(asPath))
    //     console.log(asPath)
    // }, [destinationsArray, router.asPath, setCurrentDest])
    
  return (
    <div className="destination">
        <Meta />
        <div className='destination-container'>
            <h1 className="section-header"><span className='section-header__num'>01</span>PICK YOUR DESTINATION</h1>
            <div className='destination__image'>
                <Image 
                    src={destination.images.png.slice(1)} 
                    layout="fill"
                    objectFit='contain' 
                    alt={`Image of ${destination.name}`} 
                    priority
                />
            </div>
            <div className='destination-info'>
                <div className='destination-picker'>
                    <ContentPicker data={destinations} current={currentDest} buttonStyle={2} />    
                </div>
                <div className='destination-info__body'>
                    <h2 className='destination-info__heading'>{destination.name}</h2>
                    <p className='destination-info__text'>{destination.description}</p>
                </div>
                <ul className='destination-stats'>
                    <li className='destination-stats__item'>
                        <h3 className='destination-stats__item-heading'>Avg. Distance</h3>
                        <p className='destination-stats__item-stat'>{destination.distance}</p>
                    </li>
                    <li className='destination-stats__item'>
                        <h3 className='destination-stats__item-heading'>Est. Travel Time</h3>
                        <p className='destination-stats__item-stat'>{destination.travel}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Destination
