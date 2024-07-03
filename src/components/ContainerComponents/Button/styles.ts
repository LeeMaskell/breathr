import { DARK_BLUE, GREY } from "@/app/library/constants";
import styled from "styled-components";


export const DefaultButton = styled.button<{className: string}>`
    background-color: ${props => props.className == "primary" ? "#FFFFFF" : DARK_BLUE};
    color: ${props => props.className == "primary" ? "#000000" : "#FFFFFF"};
    width: ${props => props.className == "primary" ? "8.125rem" : "100%"};
    width: 100%;
    height: 1.875rem;
    border: none;
    font-size: 1rem;
    padding: 0 1rem;
    cursor: pointer;
`;

export const ToggleButton = styled.button<{$active?: boolean}>`
    min-width: 8.125rem;
    height: ${props => props.$active ? "2rem" : "1.875rem"};
    font-size: 1rem;
    color: "#000000";
    background-color: ${props => props.$active ? "#FFFFFF" : GREY};
    border: none;
    padding: 0 1rem;
    cursor: pointer;
`;