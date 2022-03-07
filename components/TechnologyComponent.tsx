// TYPES
import type { TechTypes, Tech } from '../lib/types'
// REACT IMPORTS
import { useContext } from "react"
// NEXT IMPORTS
import Image from 'next/image'
// LOCAL IMPORTS
import AppContext from "../public/context"
import ContentPicker from './ContentPicker'


const TechnologyComponent = ({technology, currentTech = 0}: {technology: TechTypes, currentTech?: number}) => {
  const value = useContext(AppContext);
  let { isDesktop } = value.state;
  const tech: Tech = technology[currentTech]

  return (
    <div className='tech-container'>
      <div className='tech__image'>
        <Image 
          src={isDesktop ? tech.images.portrait.src.slice(1) : tech.images.landscape.src.slice(1)} 
          layout="fill"
          objectFit='cover' 
          alt={`Image of ${tech.name}`}
          priority
        />
      </div>
      <div className='tech__picker'>
        <ContentPicker data={technology} buttonStyle={1} current={currentTech} />
      </div>
      <div className='tech-info'>
        <h5 className='tech-info__sub'>The Terminology...</h5>
        <h2 className='tech-info__name'>{tech.name}</h2>
        <p className='tech-info__description'>{tech.description.replace(/\-/g, '\u2011')}</p>
      </div>
    </div>
  )
}

export default TechnologyComponent
