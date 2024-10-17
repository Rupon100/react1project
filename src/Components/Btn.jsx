import { useState } from "react"


export default function Btn(){
    const [addCount, setAddCount] = useState(0);
    const [reduceCount, setReduceCount] = useState(20);
    const addBtn = (n) => {
        const newCount = addCount+n;
        setAddCount(newCount)
    }
    const reduceBtn = () => {
        const reduce = reduceCount >= 1 ? reduceCount-1 : reduceCount;
        setReduceCount(reduce)
    }
    return (
        <div className="btnBox">
            <button onClick={() => addBtn(1)}>click for add: {addCount}</button>
            <button onClick={reduceBtn}>click for reduce: {reduceCount}</button>
        </div>
    )
}

