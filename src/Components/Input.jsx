import { useState } from "react"


export default function Input(){
    const [name, setName] = useState('');
    return(
        <div>
            <h2>From input</h2>
            <input type="text" placeholder="Enter any name" value={name}
             onChange={e => setName(e.target.value)}
             />
            <p>Your Name: {name}</p> 
        </div>
    )
}