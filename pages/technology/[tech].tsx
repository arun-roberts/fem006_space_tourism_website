// TYPES
import type { TechTypes } from '../../lib/types'
// REACT IMPORTS
import { GetStaticProps, GetStaticPaths } from 'next';
import TechnologyComponent from "../../components/TechnologyComponent";
import Meta from "../../components/Meta";
import data from '../../public/data.json'

const Tech = ({ pageData, currentPage }: { pageData: TechTypes, currentPage: string | string[] | undefined }) => {
    const techArray: string[] = pageData.map(e => e.name.replace(/\s/g, '-').toLowerCase())
    const currentTech: number = typeof currentPage == 'string' ? techArray.indexOf(currentPage) : 0

    return (
        <main className="tech">
            <Meta />
            <h1 className="section-header"><span className='section-header__num'>03</span>SPACE LAUNCH 101</h1>
            <div className="tech__background"></div>
            <TechnologyComponent technology={pageData} currentTech={currentTech} />
        </main>
    )
}

export default Tech

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const currentPage: string | string[] | undefined = params !== undefined ? params.tech : 'launch-vehicle' 
    return {
        props: {
            pageData: data.technology,
            currentPage
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.technology.map(t => ({
        params: { tech: t.name.replace(/\s/g, '-').toLowerCase() }
    }))
    return { paths, fallback: false}
}