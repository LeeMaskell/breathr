"use client";
import React from 'react';
import { useStateContext } from "../../../app/library/resonantBreathingContext";
import { AnimationContainer, AnimationShape, AnimationLimit } from './styles';

export default function ResonantBreathingAnimation() {
  const { startAnimation, animationIterationCount, animationRate } = useStateContext();

  return (
    <AnimationContainer>
      <AnimationShape $startAnimation={startAnimation} $animationIterationCount={animationIterationCount} $animationRate={animationRate}></AnimationShape>
      <AnimationLimit />
    </AnimationContainer>
  )
}
