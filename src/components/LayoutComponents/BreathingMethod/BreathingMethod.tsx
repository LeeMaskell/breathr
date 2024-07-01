import React from "react";
import {
  BreathingMethodContainer,
  AnimationContainer,
  GuideText,
  ControlPanel,
} from "./styles";

export default function BreathingMethod({ children }: any) {
  const [animation, guideText, controlPanel] = children;
  return (
    <BreathingMethodContainer>
      <AnimationContainer>{animation}</AnimationContainer>
      <GuideText>{guideText}</GuideText>
      <ControlPanel>{controlPanel}</ControlPanel>
    </BreathingMethodContainer>
  );
}
