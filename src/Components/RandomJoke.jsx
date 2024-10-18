import { useEffect, useState } from "react"




export default function RandomJoke(){
    const [joke, setJoke] = useState('');
    const [fetchJoke, setFetchJoke] = useState(false);


    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => setJoke(data))
    }, [fetchJoke])
    return(
        <div>
            <h2>Random Joke Generator</h2>
            <div style={{border: '1px solid white', margin: '10px'}}>
               <p>{joke.setup}</p>
               <p>{joke.punchline}</p>
            </div>
            <button onClick={() => setFetchJoke(!fetchJoke)}>Another Joke</button>
        </div>
    )
}



