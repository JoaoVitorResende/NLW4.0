import { useState,useEffect, useContext} from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import { countDownContext } from '../contexts/CountDownContext';
import Styles from '../Styles/components/CountDown.module.css';

let countdownTimeout : NodeJS.Timeout;

export function CountDown(){

    const {minutes,
            seconds,
            Hasfinished,
            isactive,
            StartContDown,
            ResetContDown} = useContext(countDownContext);

    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight] = String(seconds).padStart(2,'0').split('');

    return(   
        <div>
            <div className ={Styles.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {Hasfinished ?(
                <button  
                    disabled
                    className={Styles.CountDownButton}> 
                    ciclo encerrado 
                </button>
            ):(
               <>
                    {isactive ?(
                    <button type="button" 
                        className={`${Styles.CountDownButton} ${Styles.CountDownButtonActive}`}
                        onClick={ResetContDown}> 
                        abandonar o ciclo 
                    </button>
                    ):(
                    <button type="button" 
                        className={Styles.CountDownButton}
                        onClick={StartContDown}> 
                        inciar ciclo
                    </button>
                      )}
               </> 
            )}        
        </div>
    );
}