import { useState } from 'react'  
import Link from 'next/link'

const ContentPicker = ({data, buttonStyle, current}: {data: any[], buttonStyle: number, current: number}) => {
    const buttonStyles: string[] = [ 'dot', 'numbered', 'named']
    const button = buttonStyles[buttonStyle] || buttonStyles[0]
    return (
        <nav className={button}>
            <ul className={button + '__list'}>
              {
                data.map((e, i) => 
                  <li 
                    key={i}
                    className={button + '__list-item'}
                  >
                    <Link href={`#${e.name.replace(' ', '_')}`}>
                      <a 
                        className={`${button}__button ${button + (i == current ? '__button--active ' : '__button--inactive')}`}
                      >
                        {e.name}
                      </a>
                    </Link>
                  </li>
                )
              }
            </ul>
          </nav>
    )
}

export default ContentPicker