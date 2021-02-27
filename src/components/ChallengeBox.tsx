import styles from '../Styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    return(
        <div className = {styles.challengerBoxContainer}>
            <div className = {styles.challengesNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level-up"/>
                    Avance de level completando o desafio
                </p>
            </div>
        </div>
    );
}