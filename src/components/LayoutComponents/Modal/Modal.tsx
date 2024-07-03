import React from "react";
import styled from "styled-components";
import { ModalContainer, ModalContent, ModalTitle, ModalText } from "./styles";
import { useStateContext } from "@/app/library/context";
import Button from "@/components/ContainerComponents/Button/button";

const ResponsiveButtonContainer = styled.div`
  width: 8.125rem;
  margin-bottom: 1rem;
`;

export default function Modal() {
  const StateContext = useStateContext();
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Instructions Modal</ModalTitle>
        <ModalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dapibus dictum diam, eget dapibus erat commodo eget. Fusce consequat
          justo diam, ac commodo felis condimentum non. Curabitur ut auctor
          enim. Donec sollicitudin felis mauris, id pellentesque odio maximus
          vitae. Etiam ut dictum neque. Suspendisse potenti. Ut blandit viverra
          arcu, id eleifend dolor egestas ac. Cras iaculis mi eu massa
          pellentesque vulputate. Vestibulum a libero sodales velit porta rutrum
          sit amet eget felis.
        </ModalText>
        <ResponsiveButtonContainer>
          <Button
            text="Close Modal"
            variant="primary"
            onClick={() => StateContext.setOpenModal(false)}
          />
        </ResponsiveButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
}
