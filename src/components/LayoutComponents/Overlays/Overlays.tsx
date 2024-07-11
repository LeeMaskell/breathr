import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import { useStateContext } from '@/app/library/resonantBreathingContext';
import AmbientResonance from '@/components/ContainerComponents/AmbientResonance/AmbientResonantDisplay';

export default function Overlays() {
  const overlaysRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const StateContext = useStateContext();

  useEffect(() => {
    overlaysRef.current = document.querySelector<HTMLElement>("#overlays");
    setMounted(true);
  }, [])
  
  return (
    <>
        {(StateContext.openModal && mounted && overlaysRef.current) ? createPortal(<Modal />, overlaysRef.current) : null}
        {(StateContext.openAmbientResonantDisplay && mounted && overlaysRef.current) ? createPortal(<AmbientResonance />, overlaysRef.current) : null}
    </>
  )
}
