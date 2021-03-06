import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallegens';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import styles from '../Styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className ={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
    <ExperienceBar/>
    <section>
      <div>
        <Profile/>
        <CompletedChallenges/>
        <CountDown/>
      </div>
      <div>
        <ChallengeBox/>
      </div>
    </section>
    </div>
  )
}
