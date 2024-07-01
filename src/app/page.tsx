"use client";
import { useLayoutEffect, useState } from "react";
// import styles from "./page.module.css";
import { Main } from "./styles";
import Link from "next/link";
import Banner from "@/components/ContainerComponents/Banner/Banner";

export default function Home() {
  const [showUserConsentBanner, setShowUserConsentBanner] = useState<boolean>(false);
  

  // Do not show the banner if the custom cookie is present.
  useLayoutEffect(() => {
    const doesConsentCookieExist = document.cookie.includes("breathr"); // update cookie naming convention
    setShowUserConsentBanner(!doesConsentCookieExist);
  }, [])

  return (
    <Main>
      {showUserConsentBanner && <Banner setShowUserConsentBanner={setShowUserConsentBanner} />}
      {/* placeholder Link */}
      <Link href="resonant-breathing">Resonant Breathing
      </Link>
      {/* placeholder Link */}
      <Link href="four-seven-eight-breathing">4-7-8 Breathing
      </Link>
      {/* placeholder Link */}
      <Link href="boxt-breathing">Box Breathing
      </Link>
    </Main>
  );
}
