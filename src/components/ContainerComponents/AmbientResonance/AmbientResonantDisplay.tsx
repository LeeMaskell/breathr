import React, { useState } from "react";
import { useStateContext } from "@/app/library/resonantBreathingContext";
import { AmbientDisplay, Close } from "./styles";
import { IoIosCloseCircle } from "react-icons/io";

export default function AmbientResonantDisplay() {
  const { setOpenAmbientResonantDisplay } = useStateContext();
  const [showButton, setShowButton] = useState<boolean>(false);

  // hide the button so that the ambient display is uncluttered
  const handleShowButton = (e: React.MouseEvent) => {
    setShowButton(true);
    setTimeout(() => setShowButton(false), 3000);
  }
  
  return (
    <AmbientDisplay onMouseMove={(e) => handleShowButton(e)}>
      {showButton && <Close onClick={() => setOpenAmbientResonantDisplay(false)}>
        <IoIosCloseCircle size="40px" color="white"/>
      </Close>}
    </AmbientDisplay>
  );
}
