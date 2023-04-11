import { Button, Htag } from "@/components";

export default function Home() {

  return (
    <>
      <Htag  tag='h1'  >Текст</Htag>
      <Button appearance="primary" className="red">Кнопка</Button>
      <Button arrow='right' appearance="ghost">Кнопка</Button>
    </>
  );
}
