// TYPES
import type { CrewTypes, CrewMemb } from '../lib/types'
// NEXT IMPORTS
import Image from 'next/image'
// LOCAL IMPORTS
import ContentPicker from './ContentPicker'


const CrewComponent = ({crew, currentCrew = 0}: {crew: CrewTypes, currentCrew?: number}) => {
  const member: CrewMemb = crew[currentCrew]
  const classString: string = member.name.replace(' ', '_').toLowerCase()

  return (
    <div className="crew-container">
      <div className={`crew__image ${classString}__image`}>
        <Image 
          src={member.images.png.slice(1)} 
          layout="fill"
          objectFit='contain' 
          alt={`Image of ${member.role} ${member.name}`} 
          priority
        />
      </div>
      <div className={`crew-info ${classString}-info`}>
        <div className="crew__picker">
          <ContentPicker data={crew} buttonStyle={0} current={currentCrew}/>
        </div>
        <h3 className='crew-info__role'>{member.role}</h3>
        <h4 className='crew-info__name'>{member.name}</h4>
        <p className='crew-info__bio'>{member.bio.replace(/\-/g, '\u2011')}</p>
      </div>
    </div>
  )
}

export default CrewComponent
