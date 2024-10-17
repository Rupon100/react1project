import { useState } from "react"


export default function Toggle(){
    const [isActive, setisActive] = useState(true);
    return (
        <div>
            <h3>Toggle</h3>
            <p>Status: {isActive ? 'ON' : 'YES'}</p>
            <button onClick={() => setisActive(!isActive)}>toggle</button>
        </div>
    )
}