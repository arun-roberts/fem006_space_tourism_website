// TYPES
import type { DestTypes, Dest } from '../lib/types'
// NEXT IMPORTS
import Image from 'next/image'
// LOCAL IMPORTS
import ContentPicker from '../components/ContentPicker'


const DestinationComponent = ({destinations, currentDest = 0}: {destinations: DestTypes, currentDest?: number}) => {
    const destination: Dest = destinations[currentDest]
    
  return (
    <div className='destination-container'>
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
  )
}

export default DestinationComponent
