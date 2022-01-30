import type { NextPage } from 'next'
import type { CrewTypes } from '../lib/types'
import { useState } from 'react'
import Meta from '../components/Meta'
import CrewComponent from '../components/CrewComponent'
import data from '../public/data.json'
import Image from 'next/image'

const Crew: NextPage = () => {
    const [ currentCrew, setCurrentCrew ] = useState<number>(0)
    const crew: CrewTypes = [ ...data.crew ]
  return (
    <>
        <Meta />
        <h3><span>02</span> MEET YOUR CREW</h3>
        <CrewComponent crew={crew} currentCrew={currentCrew} setCurrentCrew={setCurrentCrew} />
    </>
  )
}

export default Crew
