// TYPES
import type { NextPage } from 'next'
import type { CrewTypes, CrewMemb } from '../lib/types'
// REACT IMPORTS
import { useContext, useLayoutEffect } from 'react'
// NEXT IMPORTS
import Image from 'next/image'
import { useRouter } from 'next/router'
// LOCAL IMPORTS
import AppContext from '../public/context'
import Meta from '../components/Meta'
import data from '../public/data.json'
import ContentPicker from '../components/ContentPicker'


const Crew: NextPage = () => {
    // ACCESS CONTEXT
    const value = useContext(AppContext)
    let { currentCrew } = value.state
    const { setCurrentCrew }: { setCurrentCrew: React.Dispatch<React.SetStateAction<number>> } = value
    // ASSIGN DATA TO VARIABLES AND ATTACH TYPES
    const crew: CrewTypes = [ ...data.crew ]
    const member: CrewMemb = crew[currentCrew]
    const classString: string = member.name.replace(' ', '_').toLowerCase()
    // HANDLE PATH AND STATE UPDATES
    const router = useRouter();
    const crewArray: string[] = data.crew.map(e => e.name.toLowerCase())
    useLayoutEffect(() => {
      let hash = router.asPath.slice(router.asPath.indexOf('#') + 1).replace(/\_/g, ' ').toLowerCase(),
             i = crewArray.indexOf(hash)
      setCurrentCrew(i == -1 ? 0 : i)
  }, [crewArray, router.asPath, setCurrentCrew]);

  return (
    <main className="crew">
        <Meta />
        <h2 className="section-header"><span className="section-header__num">02</span> MEET YOUR CREW</h2>
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
    </main>
  )
}

export default Crew
