"use client";
import React, { useState } from "react";
import Button from "../Button/button";
import {
  ControlPanelContainer,
  QuickStartPresets,
  CustomSettings,
  SettingContainer,
  Inputs,
  Label,
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
import styled from "styled-components";
import { Anybody } from "next/font/google";

const ResponsiveButtonContainer = styled.div`
  width: 8.125rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

  const setPresetAnimationParams = (
    startAnimation: boolean,
    iterationCount: any, // fix
    rate: number
  ) => {
    const timeoutValue = rate * 2 * iterationCount * 1000;
    setStartAnimation(startAnimation);
    setAnimationIterationCount(iterationCount);
    console.log(iterationCount + "1");
    setAnimationRate(rate);
    if (iterationCount === "infinite") {
      return;
    } else {
      setTimeout(() => setStartAnimation(false), timeoutValue); // or !startAnimation?
    }
    console.log(iterationCount + "2");
  };

  const calculateaCustomIterationValue = (
    iterationCount: number,
    rate: number
  ) => {
    const value = (Number(iterationCount) * 60) / (rate * 2);
    return iterationCount == 0 ? "infinite" : value;
  };

  // rate = breathing rate eg. 5.5 seconds multiplied by 2 to get entire animation time
  // iterationCount = amount of times the animation should run eg. X * rate
  const setCustomAnimationParams = (
    startAnimation: boolean,
    customIterationCount: number,
    rate: number
  ) => {
    const t = calculateaCustomIterationValue(customIterationCount, rate);
    const timeoutValue = customIterationCount * 60 * (rate * 2) * 100;
    console.log(timeoutValue);
    setStartAnimation(startAnimation);
    setAnimationIterationCount(
      calculateaCustomIterationValue(customIterationCount, rate)
    );
    setAnimationRate(rate);
    setTimeout(() => setStartAnimation(false), timeoutValue); // or !startAnimation
  };

  const handleToggle = (activeButton: "btn1" | "btn2") => {
    setShowDefaultPresetSettings(activeButton === "btn1");
    setActive(activeButton);
  };

  // Move this to a better location
  const quickstartButtons = [
    {
      id: 1,
      text: "Continuous",
      onClick: () =>
        setPresetAnimationParams(
          !startAnimation,
          "infinite",
          FIVE_POINT_FIVE_SECONDS
        ),
      variant: "primary",
      disabled: startAnimation,
    },
    {
      id: 1,
      text: "1 Min",
      onClick: () =>
        setPresetAnimationParams(!startAnimation, 6, FIVE_POINT_FIVE_SECONDS),
      variant: "primary",
      disabled: startAnimation,
    },
    {
      id: 1,
      text: "2 Mins",
      onClick: () =>
        setPresetAnimationParams(!startAnimation, 12, FIVE_POINT_FIVE_SECONDS),
      variant: "primary",
      disabled: startAnimation,
    },
    {
      id: 1,
      text: "5 Mins",
      onClick: () =>
        setPresetAnimationParams(!startAnimation, 55, FIVE_POINT_FIVE_SECONDS),
      variant: "primary",
      disabled: startAnimation,
    },
    {
      id: 1,
      text: "10 Mins",
      onClick: () =>
        setPresetAnimationParams(!startAnimation, 110, FIVE_POINT_FIVE_SECONDS),
      variant: "primary",
      disabled: startAnimation,
    },
  ];

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
          <BsFillInfoCircleFill size="20px" />
        </Information>
      </ButtonGroup>

      <QuickStartPresets $visible={showDefaultPresetSettings}>
        {quickstartButtons.map((b) => {
          return (
            <ResponsiveButtonContainer key={b.id}>
              <Button
                text={b.text}
                onClick={b.onClick}
                variant={b.variant}
                disabled={b.disabled}
              />
            </ResponsiveButtonContainer>
          );
        })}
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
            <Label htmlFor="4.5">4.5 seconds</Label>
            <input
              type="radio"
              id="5.5"
              onChange={(e) => setAnimationRate(FIVE_POINT_FIVE_SECONDS)}
              checked={animationRate === FIVE_POINT_FIVE_SECONDS}
            />
            <Label htmlFor="5.5">5.5 seconds</Label>
            <input
              type="radio"
              id="6.5"
              onChange={(e) => setAnimationRate(SIX_POINT_FIVE_SECONDS)}
              checked={animationRate === SIX_POINT_FIVE_SECONDS}
            />
            <Label htmlFor="6.5">6.5 seconds</Label>
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

        <ResponsiveButtonContainer>
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
        </ResponsiveButtonContainer>
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
