import { useState,useEffect, useContext} from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import Styles from '../Styles/components/CountDown.module.css';

let countdownTimeout : NodeJS.Timeout;

export function CountDown(){
    const {startNewChallenge} = useContext(challengeContext);

    const [time,setTime] = useState(0.1*60);
    const [isactive,setIsActive] = useState(false);
    const [Hasfinished,setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight] = String(seconds).padStart(2,'0').split('');

    function StartContDown(){
        setIsActive(true);
    }

    function ResetContDown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25*60);
    }

    useEffect(()=>{
        if(isactive && time >0){
            countdownTimeout = setTimeout(()=>{
                setTime(time-1);
            },1000)
        } else if(isactive && time === 0){
            setHasFinished(true);
            setIsActive(false);
        }  
    },[isactive,time])

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