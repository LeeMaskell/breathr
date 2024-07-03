import styled from "styled-components";
import { keyframes } from "styled-components";

const breatheAnimation = keyframes`
    0% { transform: scale(1) }
    50% { transform: scale(4) }
    100% { ransform: scale(1) }
`;

// rate is set for the length of inhalation. The animation runs for inhalation and exhalation and so is 2 x rate.
const makeRateAString = (rate: number) => {
    const numericalValue = (Number(rate) * 2);
    return numericalValue.toString();
}

export const AnimationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    
`;

export const AnimationShape = styled.div<{$startAnimation: boolean, $animationIterationCount: number | string, $animationRate: number}>`
    background: radial-gradient(circle, rgba(242,242,242,1) 0%, rgba(29,237,240,1) 50%);
    height: 6.25rem;
    width: 6.25rem;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    animation-name: ${props => (props.$startAnimation ? breatheAnimation : null)};
    animation-duration: ${props => makeRateAString(props.$animationRate)}s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: ${props => (props.$animationIterationCount.toString())};
    position: relative;
    z-index: 10;

    @media (max-width: 480px) {
        width: 4.688rem;
        height: 4.688rem;
    }
`;

export const AnimationLimit = styled.div`
    height: 25rem;
    width: 25rem;
    border: 1px dashed #FFFFFF;
    border-radius: 50%;
    position: absolute;
    z-index: 10;

    @media (max-width: 480px) {
        width: 18.75rem;
        height: 18.75rem;
    }
`;