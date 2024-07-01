import React from 'react';
import { BannerContainer } from './styles';

// interface IBanner {
//   setShowUserConsentBanner: boolean;
// }

export default function Banner({setShowUserConsentBanner}: {setShowUserConsentBanner: any}) {
    const acceptTrackingConsent = () => {
      setShowUserConsentBanner(false);
      return document.cookie = "breathr=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
    };

  return (
    <BannerContainer>
        <p>Some text about accepting cookies in order to track user activity</p>
        <button onClick={() => acceptTrackingConsent()}>Accept</button>
        <button onClick={() => setShowUserConsentBanner(false)}>Decline</button>
    </BannerContainer>
  )
}
