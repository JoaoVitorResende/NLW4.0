import styles from '../Styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    return (
        <div className = {styles.completedchallengsContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}