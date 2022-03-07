import DestinationComponent from "../../components/DestinationComponent";
import Meta from "../../components/Meta";
import data from '../../public/data.json'

const DestinationHome = () => {
    return (
        <main className="destination">
            <Meta />
            <h1 className="section-header"><span className='section-header__num'>01</span>PICK YOUR DESTINATION</h1>
            <div className="destination__background"></div>
            <DestinationComponent  destinations={data.destinations} />
        </main>
    )
}

export default DestinationHome