import { useState } from "react";
import Button from "./Button"

const Counter = () => {
    // let  counterValue = 10;
    const [counterValue , setCounterValue] = useState(10)
    const increment =()=>{
        setCounterValue(prev => prev +1);
    }
    const decrement =()=>{
        setCounterValue(prev => prev -1);
    }
    const reset =()=>{
        setCounterValue(0);
    }
    return <section className="mb-10 flex flex-col">
        <h2 className="text-2xl">Count is</h2>
        <p className="text-xl">{counterValue}</p>
        <div className="flex gap-4 mb-4 justify-center">
            <Button text="+" onClick={increment}/>
            <Button text="-" onClick={decrement}/>
        </div>
        <div className="justify-center"> 
            <Button text="Reset" onClick={reset}/>
        </div>
    </section>
}

export default Counter;