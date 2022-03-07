// TYPES
import type { CrewTypes } from '../../lib/types'
// REACT IMPORTS
import { GetStaticProps, GetStaticPaths } from 'next';
import CrewComponent from "../../components/CrewComponent";
import Meta from "../../components/Meta";
import data from '../../public/data.json'

const Tech = ({ pageData, currentPage }: { pageData: CrewTypes, currentPage: string | string[] | undefined }) => {
    const crewArray: string[] = pageData.map(e => e.name.replace(/\s/g, '-').toLowerCase())
    const currentCrew: number = typeof currentPage == 'string' ? crewArray.indexOf(currentPage) : 0

    return (
        <main className="crew">
            <Meta />
            <h1 className="section-header"><span className='section-header__num'>02</span>MEET YOUR CREW</h1>
            <div className="crew__background"></div>
            <CrewComponent crew={pageData} currentCrew={currentCrew} />
        </main>
    )
}

export default Tech

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const currentPage: string | string[] | undefined = params !== undefined ? params.crew : 'douglas-hurley' 
    return {
        props: {
            pageData: data.crew,
            currentPage
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.crew.map(c => ({
        params: { crew: c.name.replace(/\s/g, '-').toLowerCase() }
    }))
    return { paths, fallback: false}
}