import { Button } from '@/components/Button';

export const ExampleSection = () => (
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
      <button className="button mb-10" type="submit">
        button
      </button>
      <a className="button" href="./">
        link
      </a>

      <Button className="m-10" tag="a" label="Каталог" href="catalog" />
      <div id="catalog" className="w-74 h-74 mt-[500px]">
        Scroll test
      </div>
    </div>
  </section>
);
