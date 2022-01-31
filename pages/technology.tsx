// TYPES
import type { NextPage } from 'next'
import type { TechTypes, Tech } from '../lib/types'
// REACT IMPORTS
import { useContext } from "react"
// NEXT IMPORTS
import Image from 'next/image'

import AppContext from "../public/context"
import Meta from '../components/Meta'
import data from '../public/data.json'


const Technology: NextPage = () => {
    const value = useContext(AppContext);
    let { currentTech } = value.state;
    const { setCurrentTech } = value;
    const tech: TechTypes = [ ...data.technology ]
    let displayed: Tech = tech[currentTech]
  return (
    <>
        <Meta />
        <h3><span>03</span> SPACE LAUNCH 101</h3>
        <div>
          <Image 
            src={displayed.images.portrait.src.slice(1)} 
            width={displayed.images.portrait.width} 
            height={displayed.images.portrait.height}
            alt={`Image of ${displayed.name}`}
          />
          <nav>
            <ul>
              {tech.map((t, i) => (
                <li key={'tech' + i}>
                  <button onClick={() => setCurrentTech(i)}>{i + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h5>The Terminology...</h5>
            <h2>{displayed.name}</h2>
            <p>{displayed.description}</p>
          </div>
        </div>
    </>
  )
}

export default Technology
