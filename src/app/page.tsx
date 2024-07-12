"use client";
import { useLayoutEffect, useState } from "react";
import { Main, LinksContainer } from "./styles";
import Banner from "@/components/ContainerComponents/Banner/Banner";
import LinkCard from "@/components/LayoutComponents/LinkCard/LinkCard";
import { breathingMethods } from "./library/data";

export default function Home() {
  const [showUserConsentBanner, setShowUserConsentBanner] = useState<boolean>(false);

  // Do not show the banner if the custom cookie is present.
  useLayoutEffect(() => {
    const doesConsentCookieExist = document.cookie.includes("breathr"); // update cookie naming convention
    setShowUserConsentBanner(!doesConsentCookieExist);
  }, []);
  
  return (
      <Main>
        {showUserConsentBanner && (
          <Banner setShowUserConsentBanner={setShowUserConsentBanner} />
        )}
        <LinksContainer>
          {breathingMethods.map((method) => (
            <LinkCard
              key={method.id}
              href={method.href}
              text={method.text}
              buttonText={method.buttonText}
            />
          ))}
        </LinksContainer>
      </Main>
  );
}
