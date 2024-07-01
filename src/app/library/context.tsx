import React, { createContext, useState, useContext } from "react";

interface IContextState {
  startAnimation: boolean;
  setStartAnimation: (arg0: boolean) => void;
  animationIterationCount: number;
  setAnimationIterationCount: any;
  animationRate: number;
  setAnimationRate: any; // fix
  showDefaultPresetSettings: boolean;
  setShowDefaultPresetSettings: (arg0: boolean) => void;
  customIterationCount: number;
  setCustomIterationCount: any; // fix
  guideText: string;
  setGuideText: any; // fix
  openModal: boolean;
  setOpenModal: (arg0: boolean) => void;
}

const StateContext = createContext({} as IContextState);

export default function StateContextWrapper({ children }: any) {
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [animationIterationCount, setAnimationIterationCount] = useState<number>(0);
  const [animationRate, setAnimationRate] = useState<number>(5.5);
  const [showDefaultPresetSettings, setShowDefaultPresetSettings] = useState<boolean>(true);
  const [customIterationCount, setCustomIterationCount] = useState<number>(0);
  const [guideText, setGuideText] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const sharedState: any = {
    startAnimation,
    setStartAnimation,
    animationIterationCount,
    setAnimationIterationCount,
    animationRate,
    setAnimationRate,
    showDefaultPresetSettings,
    setShowDefaultPresetSettings,
    customIterationCount,
    setCustomIterationCount,
    guideText,
    setGuideText,
    openModal,
    setOpenModal,
  };
  return (
    <StateContext.Provider value={sharedState}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}
