"use client";
import React, { useState } from "react";
import Button from "../Button/button";
import {
  ControlPanelContainer,
  QuickStartPresets,
  CustomSettings,
  SettingContainer,
  Inputs,
  Information,
} from "./styles";
import { useStateContext } from "@/app/library/context";
import {
  FOUR_POINT_FIVE_SECONDS,
  FIVE_POINT_FIVE_SECONDS,
  SIX_POINT_FIVE_SECONDS,
} from "../../../app/library/constants";
import ButtonGroup from "@/components/LayoutComponents/ButtonGroup/ButtonGroup";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function ControlPanel() {
  const {
    startAnimation,
    setStartAnimation,
    setAnimationIterationCount,
    animationRate,
    setAnimationRate,
    customIterationCount,
    setCustomIterationCount,
    showDefaultPresetSettings,
    setShowDefaultPresetSettings,
    setOpenModal,
  } = useStateContext();

  // Add interface/types for active
  const [active, setActive] = useState<"btn1" | "btn2">("btn1");

  // const calculateTotalDuration = (iterationCount: number, rate: number) => {
  //   return (iterationCount * 2) * rate
  // };

  const setPresetAnimationParams = (
    startAnimation: boolean,
    iterationCount: number,
    rate: number
  ) => {
    const timeoutValue = ((rate * 2) * iterationCount) * 1000;
    console.log(timeoutValue);
    setStartAnimation(startAnimation);
    setAnimationIterationCount(iterationCount);
    setAnimationRate(rate);
    setTimeout(() => setStartAnimation(false), timeoutValue); // or !startAnimation?
  };

  const calculateaCustomIterationValue = (iterationCount: number, rate: number) => {
    const value = (Number(iterationCount) * 60) / (rate * 2);
    return iterationCount ==  0 ? "infinite" : value;
    
};

  // rate = breathing rate eg. 5.5 seconds multiplied by 2 to get entire animation time
  // iterationCount is the amount of times the animation should run eg. X * rate 
  const setCustomAnimationParams = (
    startAnimation: boolean,
    customIterationCount: number,
    rate: number
  ) => {
    const t = calculateaCustomIterationValue(customIterationCount, rate);
    const timeoutValue = ((customIterationCount * 60) *(rate * 2)) * 100;
    console.log(timeoutValue);
    setStartAnimation(startAnimation);
    setAnimationIterationCount(calculateaCustomIterationValue(customIterationCount, rate));
    setAnimationRate(rate);
    setTimeout(() => setStartAnimation(false), timeoutValue); // or !startAnimation
  };

  const handleToggle = (activeButton: "btn1" | "btn2") => {
    setShowDefaultPresetSettings(activeButton === "btn1");
    setActive(activeButton);
  };

  return (
    <ControlPanelContainer>
      <ButtonGroup>
        <Button
          text="Preset"
          disabled={!startAnimation}
          onClick={() => handleToggle("btn1")}
          variant="toggle"
          active={active === "btn1"}
        />
        <Button
          text="Custom"
          disabled={!startAnimation}
          onClick={() => handleToggle("btn2")}
          variant="toggle"
          active={active === "btn2"}
        />
        <Information onClick={() => setOpenModal(true)}>
          <BsFillInfoCircleFill size="20px"/>
        </Information>
      </ButtonGroup>

      <QuickStartPresets $visible={showDefaultPresetSettings}>
        <Button
          text="Continuous"
          disabled={startAnimation}
          onClick={() =>
            setPresetAnimationParams(!startAnimation, 0, FIVE_POINT_FIVE_SECONDS)
          }
          variant="primary"
        />
        <Button
          text="1 Min"
          disabled={startAnimation}
          onClick={() =>
            setPresetAnimationParams(!startAnimation, 6, FIVE_POINT_FIVE_SECONDS)
          }
          variant="primary"
        />
        <Button
          text="2 Mins"
          disabled={startAnimation}
          onClick={() =>
            setPresetAnimationParams(!startAnimation, 12, FIVE_POINT_FIVE_SECONDS)
          }
          variant="primary"
        />
        <Button
          text="5 Mins"
          disabled={startAnimation}
          onClick={() =>
            setPresetAnimationParams(!startAnimation, 55, FIVE_POINT_FIVE_SECONDS)
          }
          variant="primary"
        />
        <Button
          text="10 Mins"
          disabled={startAnimation}
          onClick={() =>
            setPresetAnimationParams(!startAnimation, 110, FIVE_POINT_FIVE_SECONDS)
          }
          variant="primary"
        />
      </QuickStartPresets>

      <CustomSettings $visible={!showDefaultPresetSettings}>
        <SettingContainer>
          <p>Breaths per minute</p>
          <Inputs>
            <input
              type="radio"
              id="4.5"
              onChange={(e) => setAnimationRate(FOUR_POINT_FIVE_SECONDS)}
              checked={animationRate === FOUR_POINT_FIVE_SECONDS}
            />
            <label htmlFor="4.5">4.5 seconds</label>
            <input
              type="radio"
              id="5.5"
              onChange={(e) => setAnimationRate(FIVE_POINT_FIVE_SECONDS)}
              checked={animationRate === FIVE_POINT_FIVE_SECONDS}
            />
            <label htmlFor="5.5">5.5 seconds</label>
            <input
              type="radio"
              id="6.5"
              onChange={(e) => setAnimationRate(SIX_POINT_FIVE_SECONDS)}
              checked={animationRate === SIX_POINT_FIVE_SECONDS}
            />
            <label htmlFor="6.5">6.5 seconds</label>
          </Inputs>
        </SettingContainer>

        <SettingContainer>
          <p>Duration</p>
          <Inputs>
            <input
              disabled={startAnimation}
              type="number"
              placeholder="Enter duration in minutes"
              value={customIterationCount}
              onChange={(e) => setCustomIterationCount(e.target.valueAsNumber)}
            />
          </Inputs>
        </SettingContainer>

        <Button
          text="start"
          disabled={startAnimation || customIterationCount <= 0}
          onClick={() =>
            setCustomAnimationParams(
              !startAnimation,
              customIterationCount,
              animationRate
            )
          }
          variant="primary"
        />
      </CustomSettings>

      <Button
        text="Stop"
        disabled={!startAnimation}
        onClick={() => setStartAnimation(false)}
        variant="secondary"
      />

      {/* <Button
              text="Instructions"
              variant="secondary"
              onClick={() => setOpenModal(true)}
            /> */}
    </ControlPanelContainer>
  );
}
