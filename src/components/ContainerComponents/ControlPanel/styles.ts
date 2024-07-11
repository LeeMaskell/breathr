import { WHITE } from "@/app/library/constants";
import styled from "styled-components";

export const ControlPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 47.188rem;
    max-width: 47.188rem; // required?
    height: auto;
    background-color: none;

    @media (max-width: 768px) {
        width: 30rem;
    }
`;

export const QuickStartPresets = styled.div<{$visible: boolean}>`
    border: 1px solid ${WHITE};
    width: 100%;
    height: 72px;
    padding: 1.25rem;
    display: ${props => props.$visible ? "flex" : "none"};
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 0.625rem;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

export const CustomSettings = styled.div<{$visible: boolean}>`
    border: 1px solid #FFFFFF;
    width: 100%;
    height: 72px;
    padding: 0.625rem;
    display: ${props => props.$visible ? "flex" : "none"};
    flex-direction: row;
    justify-content: space-evenly;
    align-items: end;
    margin-bottom: 0.625rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        height: auto;
    }
`;

export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1.25rem;
`;

export const Inputs = styled.div`
  @media (max-width: 768px) {
        margin-bottom: 0.625rem;
    }
`;

export const Label = styled.label`
    margin-right: 0.625rem;
`;

export const IconButton = styled.div`
    margin-left: 1rem;
    margin-bottom: 0.188rem;
    cursor: pointer;
`;