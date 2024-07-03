import styled from "styled-components";
import { DARK_BLUE, LILAC, SKY_BLUE } from "@/app/library/constants";


export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30rem;
    height: 30rem;
    z-index: 20;
    padding: 1rem;
    background-color: ${LILAC};
    border: 1px solid ${SKY_BLUE};

    @media (max-width: 768px) {
        width: 62.5%;
        height: 30rem;
        overflow-y: scroll;
    }

    @media (max-width: 480px) {
        width: 18.79rem;
        height: 30rem;
        overflow-y: scroll;
        padding: 0.5rem;
    }
`;

export const ModalTitle = styled.h1`
    text-align: center;
`;

export const ModalText = styled.p`

`;