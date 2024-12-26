import React,{useState} from 'react'
import Keypad from './Keypad.js'

export default function Calculator() {
    let[input,setInput]=useState("")

    function handleClick(value)
    {
        setInput(input+value);
    }

    function calculate(value)
    {
        let ans=eval(input);
        setInput(ans);
    }

    function clear()
    {
        setInput("");
    }

  return (
    <div>
        <div className="container">
            <h1> Calculator App</h1>
         
               <input type="text" className="output" value={input} readOnly ></input>
               <Keypad handleClick={handleClick}
               calculate={calculate} clear={clear}></Keypad>
            
        </div>
    </div>
  )
}
