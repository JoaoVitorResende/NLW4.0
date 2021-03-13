import { useContext } from 'react';
import {challengeContext} from '../contexts/ChallengesContext';
import styles from '../Styles/components/Profile.module.css';


export function Profile(){

    const{level} = useContext(challengeContext);

    return(
        <div className={styles.profileContairner}>
            <img src="https://github.com/JoaoVitorResende.png" alt="joao vitor"/>
            <div>
                <strong>Joao vitor</strong>
                
                <p>
                <img src="icons/level.svg" alt="level"/>
                    level {level}
                </p>
            </div>
            
        </div>
    );
}