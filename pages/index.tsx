import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <h5 className="landing__heading-five">So, you want to travel to</h5>
        <h1 className="landing__heading-one">Space</h1>
        <p className="landing__text-body">
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <Link href="/destination">
        <a className="landing__button">
          Explore
        </a>
      </Link>
    </div>
  )
}

export default Home
