import {createContext, useState,ReactNode} from 'react';
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

    function levelUp(){
        setLevel(level+1);
    }
    function startNewChallenge(){
        const randomchallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomchallengesIndex];

        setActiveChallenge(challenge);
    }
    function ResetChallenge(){
        setActiveChallenge(null);
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
         }}>
         {children}
        </challengeContext.Provider>
    );
}