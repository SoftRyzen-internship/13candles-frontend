export const ExampleSection = () => (
  <section className="section xl:pb-12 xl:pt-10">
    <div className="container flex flex-col gap-5">
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
      <a className="link w-fit" href="./">
        Договір оферти
      </a>
    </div>
  </section>
);
