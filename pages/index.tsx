import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";
import { MenuItem } from "@/intefaces/menu.interface";
function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag  tag='h1'  >Текст</Htag>
      <Button arrow='right' appearance="primary" className="red">Кнопка</Button>
      <Button arrow='right' appearance="ghost">Кнопка</Button>
      <P size="big">Большой параграф</P>
      <P size="medium">Средний параграф</P>
      <P size="small" >Маленький параграф</P>
      <Tag size="small" color='ghost'>Тэг ghost</Tag>
      <Tag size="small" color='green'>Тэг green</Tag>
      <Tag size="small" color='grey'>Тэг grey</Tag>
      <Tag size="small" color='primary'>Тэг primary</Tag>
      <Tag size="small" color='red'>Тэг red</Tag>
      <Tag size="medium" color='ghost'>Тэг ghost big</Tag>
      <Tag size="medium" color='green' href="/hrefTest">Тэг green big href</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <ul>
        {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li> )}
      </ul>
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number
}