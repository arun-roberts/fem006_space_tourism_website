// TYPES
import type { NextPage } from 'next'
import type { TechTypes, Tech } from '../lib/types'
// REACT IMPORTS
import { useContext, useEffect } from "react"
// NEXT IMPORTS
import Image from 'next/image'
import { useRouter } from 'next/router'

import AppContext from "../public/context"
import Meta from '../components/Meta'
import data from '../public/data.json'
import ContentPicker from '../components/ContentPicker'


const Technology: NextPage = () => {
    const value = useContext(AppContext);
    let { currentTech, isDesktop } = value.state;
    const { setCurrentTech }: { setCurrentTech: React.Dispatch<React.SetStateAction<number>> } = value;
    const tech: TechTypes = [ ...data.technology ]
    const techArray: string[] = data.technology.map(e => e.name)
    let displayed: Tech = tech[currentTech]
    const router = useRouter();
    useEffect(() => {
        const onHashChangeStart = (url: string) => {
            let hash: string = url.slice(url.indexOf('#') + 1).replace('_', ' ')
            let i: number = techArray.findIndex(e => e == hash)
            setCurrentTech(i == -1 ? 0 : i)
        };

        router.events.on("hashChangeStart", onHashChangeStart);

        return () => {
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [router.events, setCurrentTech, techArray]);
  return (
    <div className='tech'>
        <Meta />
        <div className='tech-container'>
          <h2 className="section-header">
            <span className="section-header__num">
              03
            </span> SPACE LAUNCH 101
          </h2>
          <div className='tech__image'>
            <Image 
              src={isDesktop ? displayed.images.portrait.src.slice(1) : displayed.images.landscape.src.slice(1)} 
              layout="fill"
              objectFit='fill' 
              alt={`Image of ${displayed.name}`}
              priority
            />
          </div>
          <div className='tech__picker'>
            <ContentPicker data={tech} buttonStyle={1} current={currentTech} />
          </div>
          <div className='tech-info'>
            <h5 className='tech-info__sub'>The Terminology...</h5>
            <h2 className='tech-info__name'>{displayed.name}</h2>
            <p className='tech-info__description'>{displayed.description.replaceAll('-', '\u2011')}</p>
          </div>
        </div>
    </div>
  )
}

export default Technology
