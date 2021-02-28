import {createContext, useState,ReactNode} from 'react';

interface challengeContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    levelUp:()=> void;
    startNewChallenge:()=> void;
}

interface ChallengeProviderProps{
    children: ReactNode;
}

export const challengeContext = createContext({} as challengeContextData);

export function ChallengeProvider({children} : ChallengeProviderProps){

    const[level,setLevel] = useState(1);
    const[currentExperience,setCUrrentExperience] = useState(0);
    const[challengesCompleted,setChallengesComplted] = useState(0)

    function levelUp(){
        setLevel(level+1);
    }
    function startNewChallenge(){
        console.log('teste');
    }
    return(
        <challengeContext.Provider
         value={{level,
         currentExperience,
         challengesCompleted,
         levelUp,
         startNewChallenge}}>
         {children}
        </challengeContext.Provider>
    );
}