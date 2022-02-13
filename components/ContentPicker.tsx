import { useState } from 'react'

const ContentPicker = ({data, buttonStyle, callback}: {data: any[], buttonStyle: number, callback: React.Dispatch<React.SetStateAction<number>>}) => {
    const [ isActive, setIsActive ] = useState<boolean[]>(data.map((e, i) => i == 0 ? true : false))
    const falseState: boolean[] = data.map(e => false)
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
                    <button 
                      onClick={() => {
                          callback(i)
                          const newActive = [ ...falseState ]
                          newActive[i] = true
                          setIsActive(newActive)
                    }}
                      className={`${button}__button ${button + (isActive[i] ? '__button--active ' : '__button--inactive')}`}
                    >
                      {e.name}
                    </button>
                  </li>
                )
              }
            </ul>
          </nav>
    )
}

export default ContentPicker