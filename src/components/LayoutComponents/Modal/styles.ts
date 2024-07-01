import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: hotpink;
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 20%;
    left: 30%;
    width: 200px;
    height: 200px;
    z-index: 20;
`;