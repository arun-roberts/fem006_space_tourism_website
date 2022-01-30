import type { CrewTypes, CrewMemb } from "../lib/types"
import Image from "next/image"

const CrewComponent = ({ crew, currentCrew, setCurrentCrew }: { crew: CrewTypes, currentCrew: number, setCurrentCrew: React.Dispatch<React.SetStateAction<number>> }) => {
    const member: CrewMemb = crew[currentCrew]
    return (
      <div>
        <div>
          <h4>{member.role}</h4>
          <h3>{member.name}</h3>
          <p>{member.bio}</p>
        </div>
        <ul>
          {
            crew.map((member, i) => 
              <li key={'crew' + i}>
                <button onClick={()=> setCurrentCrew(i)}>0</button>
              </li>
            )
          }
        </ul>
        <Image src={member.images.png.slice(1)} width={member.images.width} height={member.images.height} alt={`Image of ${member.role} ${member.name}`} />
      </div>
    )
  }
  
  export default CrewComponent

  