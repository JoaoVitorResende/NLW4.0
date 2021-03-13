import'../Styles/global.css';
import {challengeContext, ChallengeProvider} from'../contexts/ChallengesContext';
import { useState } from 'react';
import { CountDownProvider } from '../contexts/CountDownContext';

function MyApp({ Component, pageProps }) {
  
  return (
  <ChallengeProvider>
    <CountDownProvider>
      <Component {...pageProps} />
    </CountDownProvider>
  </ChallengeProvider>
  )
}

export default MyApp
