import styles from '../Styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContairner}>
            <img src="https://github.com/JoaoVitorResende.png" alt="joao vitor"/>
            <div>
                <strong>Joao vitor</strong>
                
                <p>
                <img src="icons/level.svg" alt="level"/>
                    level 1
                </p>
            </div>
            
        </div>
    );
}