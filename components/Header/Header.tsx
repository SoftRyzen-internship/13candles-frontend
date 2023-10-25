import { useState } from 'react';
import { ButtonOpenModal } from '../ui/ButtonOpenModal';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  //   const [typeContent, setTypeContent] = useState('');
  const onModalToggle = () => setShowModal(!showModal);
  //   const onModalOpen = () => setShowModal(true);
  return (
    <header>
      <div className="container h-[100px]">
        <h2>Header</h2>

        <ButtonOpenModal
          className="link"
          //   setTypeContent={setTypeContent}
          onModalOpen={onModalToggle}
          //   typeContent={arrayContent[ind]
        />
      </div>
    </header>
  );
};
