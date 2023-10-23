import Image from 'next/image';
import im from '../../../public/images/homepage/about/about@2x.webp';

export const AboutSection = () => {
  const text = [
    '13 Candle Bar - це сімейна майстерня ароматів і затишку. Наше невелике виробництво знаходиться в Київській області та спеціалізується на виготовленні аромадифузорів, ароматичних свічок, свічок в кашпо та інших предметах затишку.',
    'Наші клієнти обирають нас через високоякісний сервіс, використання виключно натуральних і топових матеріалів і компонентів, преміальні аромати та гарне співвідношення вартості з якістю. Також ми можемо виготовляти як оптові, так і корпоративні замовлення з розробкою продукції під існуючий бренд.',
    'Новим напрямком для нас стала ароматизація приміщень. Адже ми розуміємо, що бізнесу важливо закохувати в себе клієнтів, створюючи приємне враження за допомогою ароматів.',
    'Пишіть нам, задавайте питання, і ми залюбки познайомимо вас з всесвітом затишку і приємних ароматів в 13 Candle Bar.',
  ];

  return (
    <section
      className=""
      // id={about}
    >
      <div className="container">
        <h2 className="section-title-primary md:mb-6">Про нас</h2>
        <div className="gap-8 md:flex md:mb-8 xl:gap-[132px] xl:mb-12 xl:max-w-5xl xl:mx-auto">
          <div className="flex-1 flex flex-col">
            <Image src={im} alt="SOMETEXT"
            sizes="100vw" 
            style={{
                width: '100%',
                height: 'auto',
              }}
              />
          </div>
          <ul className="text-justify flex-1 leading-[18.78px] xl:text-lg">
            {text.map((line, idx) => (
              <li key={idx} className="mb-3 last:mb-0 last:tracking-[-0.16px]">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <a className="button mb-10 md:w-fit md:mx-auto" href="./">
          Каталог
        </a>
      </div>
    </section>
  );
};
