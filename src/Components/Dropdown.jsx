import { useState } from "react"

export default function Dropdown(){
    const [fruit, setFruit] = useState('Apple');
    return(
        <div>
            <h2>Dropdown</h2>
            <select value={fruit} onChange={e => setFruit(e.target.value)}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="mango">Mango</option>
                <option value="lemon">Lemon</option>
            </select>
            <p>You selected: {fruit}</p>
        </div>
    )
}