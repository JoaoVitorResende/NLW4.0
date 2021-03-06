import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/ChallengeBox.module.css';



export function ChallengeBox(){

    const {activeChallenge,ResetChallenge} = useContext(challengeContext);
    
    return(
        <div className = {styles.challengerBoxContainer}>
            {activeChallenge ?(
                <div className = {styles.challengesActive}>
                    <header>{activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengesSuccesdedButton}>
                                completei
                        </button>
                        <button
                            type="button"
                            className={styles.challengesFailedButton}
                            onClick={ResetChallenge}>
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