// TYPES
import type { DestTypes } from '../../lib/types'
// REACT IMPORTS
import { GetStaticProps, GetStaticPaths } from 'next';
import DestinationComponent from "../../components/DestinationComponent";
import Meta from "../../components/Meta";
import data from '../../public/data.json'

const Destination = ({ pageData, currentPage }: { pageData: DestTypes, currentPage: string | string[] | undefined }) => {
    const destArray: string[] = pageData.map(e => e.name.toLowerCase())
    const currentDest: number = typeof currentPage == 'string' ? destArray.indexOf(currentPage) : 0
    
    return (
        <main className="destination">
            <Meta />
            <h1 className="section-header"><span className='section-header__num'>01</span>PICK YOUR DESTINATION</h1>
            <div className="destination__background"></div>
            <DestinationComponent destinations={pageData} currentDest={currentDest} />
        </main>
    )
}

export default Destination

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const currentPage: string | string[] | undefined = params !== undefined ? params.dest : 'moon' 
    return {
        props: {
            pageData: data.destinations,
            currentPage
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.destinations.map(d => ({
        params: { dest: d.name.toLowerCase() }
    }))
    return { paths, fallback: false}
}