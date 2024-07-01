import React from 'react';
import { ModalContainer, ModalContent } from './styles';
import { useStateContext } from '@/app/library/context';

export default function Modal() {
  const StateContext = useStateContext();
  return (
    <ModalContainer>
        <ModalContent>
            <h1>Instructions Modal</h1>
            <button onClick={() => StateContext.setOpenModal(false)}>Close Modal</button>
        </ModalContent>
    </ModalContainer>
  )
}
