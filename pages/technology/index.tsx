import TechnologyComponent from "../../components/TechnologyComponent";
import Meta from "../../components/Meta";
import data from '../../public/data.json'

const TechnologyHome = () => {
    return (
        <main className="tech">
            <Meta />
            <h1 className="section-header"><span className='section-header__num'>03</span>SPACE LAUNCH 101</h1>
            <div className="tech__background"></div>
            <TechnologyComponent technology={data.technology} />
        </main>
    )
}

export default TechnologyHome
