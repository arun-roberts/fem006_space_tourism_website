import CrewComponent from "../../components/CrewComponent";
import Meta from "../../components/Meta";
import data from '../../public/data.json'

const CrewHome = () => {
    return (
        <main className="crew">
            <Meta />
            <h1 className="section-header"><span className='section-header__num'>02</span>MEET YOUR CREW</h1>
            <div className="crew__background"></div>
            <CrewComponent crew={data.crew} />
        </main>
    )
}

export default CrewHome
