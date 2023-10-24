
import { Information } from "@/components/Information";
import { BasketButton } from "@/components/ui/BasketButton";
// import Link from 'next/link';
// import BusinessIcon from '@/public/icons/icon_businesscase.svg';



export const ExampleSection = () => {



  return (
    <section className="section xl:pb-12 xl:pt-10">
      <div className="container">
        <div className="mb-10 flex flex-col gap-5">
          <h1 className="visually-hidden">I am a visually hidden heading</h1>
          <h2 className="title-lg">title-lg - e.g. Договір оферти</h2>
          <h2 className="title-md">title-md - e.g. Загальні положення</h2>
          <h2 className="title-sm">title-sm - e.g. Навігація</h2>
          <h2 className="section-title-primary">
            section-title-primary - e.g. Каталог
          </h2>
          <h2 className="section-title-secondary">
            section-title-secondary - e.g. Ми можемо бути корисними
          </h2>
        </div>
        <button className="button mb-10 md:w-fit" type="submit">
          button
        </button>
        <a className="button mb-10 md:w-fit" href="./">
          link
        </a>
        <a className="link" href="./">
          link with underline
        </a>
        {/* <Link href="./" className="flex w-fit items-center justify-center gap-2">
        <BusinessIcon width="24" height="24" />
        <span className="link">Для Бізнесу</span>
      </Link> */}


     
        <Information/>
        <BasketButton/>

       
         
        
      </div>
    </section>
  )
};
