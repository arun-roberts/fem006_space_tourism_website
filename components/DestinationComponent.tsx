import type { Destination } from "../lib/types"

const DestinationComponent = ({ destination }: {destination: Destination}) => {
  return (
    <div>
      <section>
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
      </section>
      <ul>
        <ul>
          <div>Avg. Distance</div>
          <div>{destination.distance}</div>
        </ul>
        <ul>
          <div>Est. Travel Time</div>
          <div>{destination.travel}</div>
        </ul>
      </ul>
    </div>
  )
}

export default DestinationComponent
    