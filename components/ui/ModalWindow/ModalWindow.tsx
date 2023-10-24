
import IconClose from '/public/icons/icon_close.svg';
import { IPortal } from '@/components/ui/Portal/types';




export const ModalWindow = ({
  onModalClose,
  children,
  className,
}: IPortal) => {





  return (


   

        <div




          className={`relative z-40  
      container 
      mt-[252px]
    xl:max-w-[1220px]
    xl:p-12
       bg-body 
      
      ${className} 

      
      `}
        >
          <button type="button" onClick={onModalClose} className="absolute right-[20px] md:right-[32px] top-[36px] z-20 w-7 h-7">
            <IconClose />

          </button>
          {children}
        </div>

  );
};
