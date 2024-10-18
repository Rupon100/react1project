import { useState } from "react"


export default function Check(){
    const [checked, setChecked] = useState(false)
    return(
        <div>
            <h2>Check Box</h2>
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            {
                // checked && <p>You accept the terms and condition!</p>
                checked ? <p>You accept the terms and condition!</p> : <p>please accpet!</p> 
            }
        </div>
    )
}