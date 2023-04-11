import { Button, Htag, P, Tag } from "@/components";

export default function Home() {

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

    </>
  );
}
