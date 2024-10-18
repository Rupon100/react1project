import { useState, useEffect } from "react"


export default function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [isActive, setisActive] = useState(false);

    useEffect(() => {
        let timer = null;
        if(isActive){
            timer = setInterval(() => {
                setSeconds((seconds) => seconds + 1)
            }, 1000)
        }else if(!isActive && seconds !== 0){
            clearInterval(timer);
        }

        return () => clearInterval(timer)
        
    }, [isActive, seconds]);
    

    const reset = () => {
        setSeconds(0)
        setisActive(false)
    }

    return(
        <div>
            <h1>{seconds}</h1>
            <button onClick={() => setisActive(!isActive)}>
                {
                    isActive ? 'Pause' : 'start'
                }
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


