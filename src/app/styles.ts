import styled from "styled-components";
import { DARK_BLUE } from "./library/constants";

export const Main = styled.div`
  background-color: ${DARK_BLUE};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  min-height: 100vh;
`;

export const LinksContainer = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
