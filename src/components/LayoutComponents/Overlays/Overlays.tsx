import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import { useStateContext } from '@/app/library/context';

export default function Overlays() {
  const overlaysRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const StateContext = useStateContext();

  useEffect(() => {
    overlaysRef.current = document.querySelector<HTMLElement>("#overlays")
    setMounted(true)
  }, [])
  
  return (
    <>
        {(StateContext.openModal && mounted && overlaysRef.current) ? createPortal(<Modal />, overlaysRef.current) : null}
    </>
  )
}
