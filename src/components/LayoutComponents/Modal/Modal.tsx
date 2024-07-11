import React from "react";
import { ModalContainer, ModalContent, ModalTitle, ModalText } from "./styles";
import { useStateContext } from "@/app/library/resonantBreathingContext";
import Button from "@/components/ContainerComponents/Button/button";
import ResponsiveButtonLayout from "../ResponsiveButtonLayout/ResponsiveButtonLayout";

export default function Modal() {
  const { setOpenModal } = useStateContext();
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
        <ResponsiveButtonLayout width={8.125} responsiveWidth={8.125}>
          <Button
            text="Close Modal"
            variant="primary"
            onClick={() => setOpenModal(false)}
          />
        </ResponsiveButtonLayout>
      </ModalContent>
    </ModalContainer>
  );
}
