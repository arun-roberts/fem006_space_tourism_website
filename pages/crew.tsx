// TYPES
import type { NextPage } from 'next'
import type { CrewTypes, CrewMemb } from '../lib/types'
// REACT IMPORTS
import { useContext } from 'react'
// NEXT IMPORTS
import Image from 'next/image'

import AppContext from '../public/context'
import Meta from '../components/Meta'
import data from '../public/data.json'


const Crew: NextPage = () => {
    const value = useContext(AppContext)
    let { currentCrew } = value.state
    const { setCurrentCrew } = value
    const crew: CrewTypes = [ ...data.crew ]
    const member: CrewMemb = crew[currentCrew]
  return (
    <div className="crew">
        <Meta />
        <h2 className="section-header"><span className="section-header__num">02</span> MEET YOUR CREW</h2>
        <div>
          <div>
            <Image 
              src={member.images.png.slice(1)} 
              layout="fill"
              objectFit='contain' 
              alt={`Image of ${member.role} ${member.name}`} 
            />
          </div>
          <nav>
            <ul>
              {
                crew.map((member, i) => 
                  <li key={'crew' + i}>
                    <button onClick={()=> setCurrentCrew(i)}>0</button>
                  </li>
                )
              }
            </ul>
          </nav>
          <div>
            <h3>{member.role}</h3>
            <h4>{member.name}</h4>
            <p>{member.bio}</p>
          </div>
        </div>
    </div>
  )
}

export default Crew
