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
    <>
        <Meta />
        <h3><span>02</span> MEET YOUR CREW</h3>
        <div>
          <Image src={member.images.png.slice(1)} width={member.images.width} height={member.images.height} alt={`Image of ${member.role} ${member.name}`} />
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
            <h4>{member.role}</h4>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
        </div>
    </>
  )
}

export default Crew
