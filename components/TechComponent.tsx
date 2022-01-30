import { useState } from "react"
import type { TechTypes, Tech } from "../lib/types"
import Image from "next/image"

const TechComponent = ({tech}: {tech: TechTypes}) => {
  const [ currentTech, setCurrentTech ] = useState<number>(0)
  let curr: Tech = tech[currentTech]
    return (
      <div>
        <ul>
          {tech.map((t, i) => (
            <li key={'tech' + i}>
              <button onClick={() => setCurrentTech(i)}>{i + 1}</button>
            </li>
          ))}
        </ul>
        <section>
          <h5>The Terminology...</h5>
          <h2>{curr.name}</h2>
          <p>{curr.description}</p>
        </section>
        <Image 
          src={curr.images.portrait.src.slice(1)} 
          width={curr.images.portrait.width} 
          height={curr.images.portrait.height}
          alt={`Image of ${curr.name}`}
        ></Image>
      </div>
    )
  }
  
  export default TechComponent
  