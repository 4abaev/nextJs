import { Htag, P, Product, Sort, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { SortEnum } from "@/components/Sort/Sort.props";
import styles from './TopPageComponent.module.css'
import { HhData } from "@/components/HhData/HhData";
import { TopLevelCategory } from "@/intefaces/page.interface";
import { Advantages } from "@/components/Advantages/Advantages";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";
export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating})
    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort})
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={"h1"}>{page.title}</Htag>
                {products && <Tag color="grey" size="medium">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product product={p} key={p._id} />))}

            </div>
            <div className={styles.hhtitle}>
                <Htag tag={"h2"}>Вакансии - {page.category}</Htag>
                <Tag color="red" size="medium">hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
            <Htag tag="h2"> Преимущества </Htag>
            <Advantages advantages={page.advantages}/>
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    )
}