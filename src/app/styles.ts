import styled from "styled-components";
import { DARK_GREEN } from "./library/constants";

export const Main = styled.div`
  background-color: ${DARK_GREEN};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
`;
