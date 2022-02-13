import Head from 'next/head'

const Meta = ({title, keywords, description}: {title: string, keywords: string, description: string}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name="keywords" content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png"></link>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Frontend Mentor | Space tourism website',
    keywords: 'Dirt, Hand, music, Australia, Arun, jazz, scum jazz, improv',
    description: 'A music devoid of purity'
}

export default Meta