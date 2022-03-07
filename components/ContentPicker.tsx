import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/ContentPicker.module.css'

const ContentPicker = ({data, buttonStyle, current}: {data: any[], buttonStyle: number, current: number}) => {
    const buttonStyles: string[] = [ 'dot', 'numbered', 'named']
    const button = buttonStyles[buttonStyle] || buttonStyles[0]
    const router = useRouter()
    const pathname = router.pathname.split('/')[1]

    return (
        <nav className={styles[button]}>
            <ul className={styles[button + '__list']}>
              {
                data.map((e, i) => 
                  <li 
                    key={i}
                    className={styles[button + '__list_item']}
                  >
                    <Link href={`/${pathname}/${e.name.replace(' ', '-').toLowerCase()}`}>
                      <a 
                        className={`${styles[button + '__button']} ${styles[`${i == current ? button + '__button___active' : button + '__button___inactive'}`]}`}
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