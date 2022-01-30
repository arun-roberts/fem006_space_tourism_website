import type { NextPage } from 'next'
import type { TechTypes } from '../lib/types'
import Meta from '../components/Meta'
import TechComponent from '../components/TechComponent'
import data from '../public/data.json'
import Image from 'next/image'

const Technology: NextPage = () => {
    const tech: TechTypes = [ ...data.technology ]
  return (
    <>
        <Meta />
        <h3><span>03</span> SPACE LAUNCH 101</h3>
        <TechComponent tech={tech} />
    </>
  )
}

export default Technology
