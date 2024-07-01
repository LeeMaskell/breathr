import React, { useState, useRef, useEffect, useCallback } from "react";
import { GuideTextContainer, Text } from "./styles";
import { useStateContext } from "@/app/library/context";

// make this component atomic before creating other breathing methods.
export default function GuideText() {
    const { startAnimation, guideText, setGuideText } = useStateContext();
    const [alternateText, setAlternateText] = useState<boolean>(false);
    const guideTextRef = useRef<undefined | number>();

    const handleGuideTextChange = useCallback(() => {
        setAlternateText((curr) => {
          curr ? setGuideText("Inhale") : setGuideText("Exhale");
          return !curr;
        });
      },[setGuideText])

    useEffect(() => {
        if (startAnimation) {
          setGuideText("inhale");
          guideTextRef.current = window.setInterval(() => handleGuideTextChange(), 5500);
        } else {
          setGuideText("");
        }
        return () => clearInterval(guideTextRef.current); // clean up function
      }, [startAnimation, setGuideText, handleGuideTextChange]);

  return (
    <GuideTextContainer>
      <Text>{guideText}</Text>
    </GuideTextContainer>
  );
}
