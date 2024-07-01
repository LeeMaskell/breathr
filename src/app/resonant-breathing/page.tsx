"use client";
import React, { useEffect, useRef, useState } from "react";
import BreathingMethod from "@/components/LayoutComponents/BreathingMethod/BreathingMethod";
import ResonantBreathingAnimation from "@/components/LayoutComponents/ResonantBreathing/ResonantBreathingAnimation";
import Overlays from "@/components/LayoutComponents/Overlays/Overlays";
import StateContextWrapper, { useStateContext } from "../library/context";
import ControlPanel from "@/components/ContainerComponents/ControlPanel/ControlPanel";
import GuideText from "@/components/ContainerComponents/GuideText/GuideText";
import styled from "styled-components";
import { DARK_GREEN } from "../library/constants";

const Main = styled.div`
  background: linear-gradient(
    180deg,
    rgba(185, 215, 227, 1) 40%,
    rgba(180, 154, 249, 1) 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
`;

export default function Page() {
  return (
    <Main>
      <StateContextWrapper>
        <Overlays />
        <BreathingMethod>
          <ResonantBreathingAnimation />
          <GuideText />
          <ControlPanel />
        </BreathingMethod>
      </StateContextWrapper>
    </Main>
  );
}