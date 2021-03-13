import {createContext, useState,ReactNode, useEffect} from 'react';
import challenges from '../../Challenges.json'

interface challenge{
    type: 'body' | 'eye';
    description : string;
    amount : number;
}

interface challengeContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    activeChallenge : challenge;
    experienceToNextLevel : number;
    levelUp:()=> void;   
    startNewChallenge:()=> void;
    ResetChallenge: ()=> void;
    CompletedChallange: ()=> void;
}

interface ChallengeProviderProps{
    children: ReactNode;
}

export const challengeContext = createContext({} as challengeContextData);

export function ChallengeProvider({children} : ChallengeProviderProps){

    const[level,setLevel] = useState(1);
    const[currentExperience,setCurrentExperience] = useState(0);
    const[challengesCompleted,setChallengesComplted] = useState(0);
    const[activeChallenge,setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level +1)* 4,2);

    useEffect(() => {
        Notification.requestPermission();
    },[])


    function levelUp(){
        setLevel(level+1);
    }
    function startNewChallenge(){
        const randomchallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomchallengesIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio !!!!',{
                body: `Valendo ${challenge.amount}xp` 
            });
        }

    }
    function ResetChallenge(){
        setActiveChallenge(null);
    }

    function CompletedChallange(){

        if(!activeChallenge){
            setActiveChallenge(null);
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience -= experienceToNextLevel;
            levelUp();

            setCurrentExperience(finalExperience);
            setActiveChallenge(null);
            setChallengesComplted(challengesCompleted+1);
        }
    }

    return(
        <challengeContext.Provider
         value={{
         level,
         currentExperience,
         challengesCompleted,
         experienceToNextLevel,
         activeChallenge,
         ResetChallenge,
         levelUp,
         startNewChallenge,
         CompletedChallange,
         }}>
         {children}
        </challengeContext.Provider>
    );
}