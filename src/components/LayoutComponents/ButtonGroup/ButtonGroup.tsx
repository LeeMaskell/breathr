import React from "react";
import styled from "styled-components";

export const ButtonGroupContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: start;
    width: auto;
`;

export default function ButtonGroup({children}: {children: any}) {
  return (
    <ButtonGroupContainer>
      {children}
    </ButtonGroupContainer>
  );
}
