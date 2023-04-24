import styles from './Menu.module.css'
import cn from 'classnames'
import { format } from 'date-fns'
import { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem, PageItem } from './menu.interface'
import CoursesIcon from './Icons/courses.svg'
import ServicesIcon from './Icons/services.svg'
import BooksIcon from './Icons/books.svg'
import ProductsIcon from './Icons/products.svg'
import { TopLevelCategory } from '@/intefaces/page.interface'

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
]



export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    const buildFirstLevel = () => {
        return <>
            {firstLevelMenu.map(m => (
                <div key={m.route}>
                    <a href={`/${m.route}`}>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id == firstCategory
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </a>
                    {m.id == firstCategory && buildSecondLevel(m)}
                </div>
            ))}
        </>
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.SecondLevelBlockOpened]: m.isOpened
                        })}>{buildThirdLevel(m.pages, menuItem.route)}</div>
                    </div>
                ))
                }
            </div >
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevel]: false
                })}> 
                {p.title}
                </a>))
        )
    }
    



return (
    <ul>
        {buildFirstLevel()}
    </ul>
)
}