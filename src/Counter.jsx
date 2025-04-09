import { useState } from "react"

export default function Counter(){

    const counterSyle ={
        border: '2px solid red',
        padding: '20px',
        margin: '20px',
        borderRadius:'10px'
    }

    const [count , setCount] =useState(0);

    const handleCount =()=>{
        const newCount=count + 1;
        setCount(newCount)
        // return setCount;

    }

   return(
    <div style={counterSyle}>
        <h3>counter:{count}</h3>
        <button onClick={handleCount}>add</button>
    </div>
   )
}