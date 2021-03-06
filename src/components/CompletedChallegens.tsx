import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import styles from '../Styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    const {challengesCompleted} = useContext(challengeContext);

    return (
        <div className = {styles.completedchallengsContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}