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
