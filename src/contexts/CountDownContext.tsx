import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { challengeContext } from './ChallengesContext';

interface CountDownContextData{
    minutes: number,
    seconds: number,
    Hasfinished: boolean,
    isactive: boolean,
    StartContDown:() => void,
    ResetContDown:() => void,
}

interface CountDownProviderProps{
    children: ReactNode;
}

export const countDownContext = createContext({} as CountDownContextData)

let countdownTimeout : NodeJS.Timeout;

export function CountDownProvider({children}:CountDownProviderProps){
    const {startNewChallenge} = useContext(challengeContext);
    const [time,setTime] = useState(0.1*60);
    const [isactive,setIsActive] = useState(false);
    const [Hasfinished,setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    function StartContDown(){
        setIsActive(true);
    }

    function ResetContDown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
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
            startNewChallenge();
        }  
    },[isactive,time])


    return(
        <countDownContext.Provider value ={{
            minutes,
            seconds,
            Hasfinished,
            isactive,
            StartContDown,
            ResetContDown,
        }}>
            {children}
        </countDownContext.Provider>
    )
}