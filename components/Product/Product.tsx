import cn from "classnames";
import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";
import { Card } from "../Card/Card";
import Image from "next/image";
import { Tag } from "../Tag/Tag";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";

export const Product = ({ product, className }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}> <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}> <Rating rating={product.initialRating} /></div>
      <div className={styles.tags}>{product.categories.map(c => (<Tag key={c} color="ghost" >{c}</Tag>))}</div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
      <div className={styles.hr}><hr/></div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.features}>фичи</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>Преимущества
          {product.advantages}
        </div>
        <div className={styles.disadvantages}>Недостатки
          {product.disadvantages}
        </div>
      </div>
      <div className={styles.hr}> <hr/> </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">Читать отзывы</Button>
      </div>
    </Card>
  )
};
