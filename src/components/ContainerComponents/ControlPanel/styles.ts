import { LIGHT_BLUE, SKY_BLUE } from "@/app/library/constants";
import styled from "styled-components";

export const ControlPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 47.188rem;
    height: auto;
    background-color: none;
`;

export const QuickStartPresets = styled.div<{$visible: boolean}>`
    border: 1px solid #FFFFFF;
    width: 100%;
    height: 72px;
    padding: 20px;
    display: ${props => props.$visible ? "flex" : "none"};
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 10px;
`;

export const CustomSettings = styled.div<{$visible: boolean}>`
    border: 1px solid #FFFFFF;
    width: 100%;
    height: 72px;
    padding: 10px;
    display: ${props => props.$visible ? "flex" : "none"};
    flex-direction: row;
    justify-content: space-evenly;
    align-items: end;
    margin-bottom: 10px;
`;

export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

export const Inputs = styled.div``;

export const Information = styled.div`
    margin-left: 1rem;
    margin-bottom: 3px;
    cursor: pointer;
`;