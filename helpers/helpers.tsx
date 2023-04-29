import CoursesIcon from './Icons/courses.svg'
import ServicesIcon from './Icons/services.svg'
import BooksIcon from './Icons/books.svg'
import ProductsIcon from './Icons/products.svg'
import { FirstLevelMenuItem } from '@/layout/Menu/menu.interface'
import { TopLevelCategory } from '@/intefaces/page.interface'

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
]