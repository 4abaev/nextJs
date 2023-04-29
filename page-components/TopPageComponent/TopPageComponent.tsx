import { Htag, Sort, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { SortEnum } from "@/components/Sort/Sort.props";
import styles from './TopPageComponent.module.css'
import { HhData } from "@/components/HhData/HhData";
export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={"h1"}>{page.title}</Htag>
                {products && <Tag color="grey" size="medium">{products.length}</Tag>}
                <Sort sort={SortEnum.Rating} setSort={() => { }} />
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}

            </div>
            <div className={styles.hhtitle}>
                <Htag tag={"h2"}>Вакансии - {page.category}</Htag>
                <Tag color="red" size="medium">hh.ru</Tag>
            </div>
            <HhData {...page.hh}/>
        </div>
    )
}