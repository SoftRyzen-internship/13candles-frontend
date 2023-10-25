'use client';
import { CSSTransition } from 'react-transition-group';
import { Squash as Hamburger } from 'hamburger-react';
import { useEffect, useRef, useState } from 'react';
// import { useParams } from 'next/navigation';

import { NavLinks } from '../ui/NavLinks';
// import { TranslationSwitcher } from '../TranslationSwitcher';
import { BusinessLink } from '../ui/BusinessLink';

import { MobileMenuProps } from './types';
import css from './MobileMenu.module.css';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  businessText,
  links,
  btnAriaOpen,
  btnAriaClose,
  isHomePage = true,
}) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);
  //   const { lang } = useParams();
  //   const currentLang = lang.toString() === 'en' ? 'Eng' : 'Укр';

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {};
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-label={isOpen ? btnAriaClose : btnAriaOpen}
        className=" md:hidden"
      >
        <Hamburger
          duration={0.3}
          toggled={isOpen}
          distance="sm"
          size={20}
          color="#171717"
          easing="ease-in-out"
          rounded
        />
      </button>

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: css['mobile-enter'],
          enterActive: css['mobile-enter-active'],
          exit: css['mobile-exit'],
          exitActive: css['mobile-exit-active'],
        }}
      >
        <div
          ref={nodeRef}
          className=" fixed bottom-0 left-0 right-0 top-[92px] z-10 overflow-auto bg-body md:hidden"
        >
          <div className="container grid gap-9 py-7 text-center text-lg">
            {/* <TranslationSwitcher lang={currentLang} /> */}

            {isHomePage && (
              <NavLinks
                onClick={() => setOpen(false)}
                className="grid"
                links={links}
              />
            )}

            <BusinessLink
              className="mx-auto inline-flex text-lg"
              isIcon={true}
              text={businessText}
            />
          </div>
        </div>
      </CSSTransition>
    </>
  );
};