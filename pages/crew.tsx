// TYPES
import type { NextPage } from 'next'
import type { CrewTypes, CrewMemb } from '../lib/types'
// REACT IMPORTS
import { useContext, useEffect, useMemo } from 'react'
// NEXT IMPORTS
import Image from 'next/image'
import { useRouter } from 'next/router'

import AppContext from '../public/context'
import Meta from '../components/Meta'
import data from '../public/data.json'
import ContentPicker from '../components/ContentPicker'


const Crew: NextPage = () => {
    const value = useContext(AppContext)
    let { currentCrew } = value.state
    const { setCurrentCrew }: { setCurrentCrew: React.Dispatch<React.SetStateAction<number>>} = value
    const crew: CrewTypes = useMemo(() => [ ...data.crew ], [ ...data.crew ])
    const member: CrewMemb = crew[currentCrew]
    const router = useRouter();
    useEffect(() => {
        const onHashChangeStart = (url: string) => {
            let hash: string = url.slice(url.indexOf('#') + 1).replace('_', ' ')
            let i: number = crew.findIndex(e => e.name == hash)
            setCurrentCrew(i == -1 ? 0 : i)
        };

        router.events.on("hashChangeStart", onHashChangeStart);

        return () => {
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [router.events, setCurrentCrew, crew]);
  return (
    <div className="crew">
        <Meta />
        <div className="crew-container">
        <h2 className="section-header"><span className="section-header__num">02</span> MEET YOUR CREW</h2>
          <div className="crew__image">
            <Image 
              src={member.images.webp.slice(1) || member.images.png.slice(1)} 
              layout="fill"
              objectFit='contain' 
              alt={`Image of ${member.role} ${member.name}`} 
            />
          </div>
          <div className="crew__picker">
            <ContentPicker data={crew} buttonStyle={0} current={currentCrew}/>
          </div>
          <div className='crew-info'>
            <h3 className='crew-info__role'>{member.role}</h3>
            <h4 className='crew-info__name'>{member.name}</h4>
            <p className='crew-info__bio'>{member.bio}</p>
          </div>
        </div>
    </div>
  )
}

export default Crew
