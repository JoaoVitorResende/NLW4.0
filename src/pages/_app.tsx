import'../Styles/global.css';
import {challengeContext, ChallengeProvider} from'../contexts/ChallengesContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  return (
  <ChallengeProvider>
  <Component {...pageProps} />
  </ChallengeProvider>
  )
}

export default MyApp
