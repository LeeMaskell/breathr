import React from "react";
import styled from "styled-components";

export const ToggleButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: start;
    width: auto;
`;

// replace any with button type
export default function ButtonGroup({children}: {children: any}) {
  return (
    <ToggleButtonContainer>
      {children}
    </ToggleButtonContainer>
  );
}
