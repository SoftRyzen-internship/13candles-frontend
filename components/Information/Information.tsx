"use client"

import { useState } from 'react';


import { ButtonOpenModal } from '@/components/ui/ButtonOpenModal';
import { Portal } from '@/components/ui/Portal';
import { ModalWindow } from '@/components/ui/ModalWindow';


export const Information = () => {

  const [showModal, setShowModal] = useState(false);
  const [typeContent, setTypeContent] = useState("");
  const onModalClose = () => setShowModal(false);
  const onModalOpen = () => setShowModal(true)

  return (
    <>
      <ul >
        <li>
          <ButtonOpenModal className='link' setTypeContent={setTypeContent} onModalOpen={onModalOpen} typeContent="contract">Договір оферти</ButtonOpenModal>
        </li>
        <li>  <ButtonOpenModal className='link' setTypeContent={setTypeContent} onModalOpen={onModalOpen} typeContent="guarantees">Гарантії та повернення</ButtonOpenModal>
        </li>
        <li>
          <ButtonOpenModal className='link' setTypeContent={setTypeContent} onModalOpen={onModalOpen} typeContent="delivery">Доставка і оплата</ButtonOpenModal>
        </li>
        <li>
          <ButtonOpenModal className='link' setTypeContent={setTypeContent} onModalOpen={onModalOpen} typeContent="rules">Правила користування сайтом</ButtonOpenModal>
        </li>
      </ul>
      <Portal onModalClose={onModalClose} showModal={showModal}>
        <ModalWindow className="text-black" onModalClose={onModalClose} showModal={showModal}>
          {typeContent === "contract" && <div className="h-[800px]">content of contract</div>}
          {typeContent === "guarantees" && <div className="h-[600px]">content of guarantees</div>}
          {typeContent === "delivery" && <div className="h-[400px]">content of delivery</div>}
          {typeContent === "rules" && <div className="h-[500px]">content of rules</div>}
        </ModalWindow>
      </Portal>
    </>
  );
};
