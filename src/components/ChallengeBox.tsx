import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/ChallengeBox.module.css';



export function ChallengeBox(){

    const contextData = useContext(challengeContext);
    
    console.log(contextData);

    const hasActiveChallenge = true;

    return(
        <div className = {styles.challengerBoxContainer}>
            {hasActiveChallenge ?(
                <div className = {styles.challengesActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>faça alongamentos de braço</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengesSuccesdedButton}>
                                completei
                        </button>
                        <button
                            type="button"
                            className={styles.challengesFailedButton}>
                                falhei
                        </button>
                    </footer>
                </div>
            ):(
                <div className = {styles.challengesNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level-up"/>
                    Avance de level completando o desafio
                </p>
                </div>
            )}    
        </div>
    );
}