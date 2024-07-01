import { DARK_BLUE } from "@/app/library/constants";
import styled from "styled-components";


export const DefaultButton = styled.button<{classname: string}>`
    background-color: ${props => props.classname == "primary" ? "#FFFFFF" : DARK_BLUE};
    color: ${props => props.classname == "primary" ? "#000000" : "#FFFFFF"};
    width: ${props => props.classname == "primary" ? "130px" : "100%"};
    min-width: 8.125rem;
    height: 1.875rem;
    border: none;
    font-size: 1rem;
    padding: 0 1rem;
    cursor: pointer;
`;

export const ToggleButton = styled.button<{$active?: boolean}>`
    min-width: 8.125rem;
    height: ${props => props.$active ? "32px" : "30px"};
    font-size: 1rem;
    color: "#000000";
    background-color: ${props => props.$active ? "#FFFFFF" : '#d3d3d3'};
    border: none;
    padding: 0 1rem;
    cursor: pointer;
`;