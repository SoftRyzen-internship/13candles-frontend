export const ExampleSection = () => (
  <section>
    <div className="container">
      <div className="mb-10 flex flex-col gap-5">
        <h1 className="visually-hidden">I am a visually hidden heading</h1>
        <h2 className="title-lg">title-lg - e.g. Договір оферти</h2>
        <h2 className="title-md">title-md - e.g. Загальні положення</h2>
        <h2 className="title-sm">title-md - e.g. Навігація</h2>
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
    </div>
  </section>
);
