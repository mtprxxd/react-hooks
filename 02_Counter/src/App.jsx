import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const count = 0;
  // const addValue = ()=> {
  //   console.log("VAlue added", Math.floor(Math.random() * 10))
  //   count = count + 1
  // }
  // so this approach won't work in react because let won't works in react

  // Instead of we use USESTATE

  const[count, setCount] = useState(0)

  const addValue = () =>{
    setCount(count+1)
    console.log("Value Added", count+1);
    
  }
   const removeVAlue = () =>{
    setCount(count-1)
    console.log("Value Removed", count-1);

    // OR

    // using if condition
    //   if(count > 0){
      
    // setCount(count-1)
    // console.log("Value Removed", count-1);
    // }
      
  
  }

  return (
    <>
     <h1>Counter The Values</h1>
     <h2>Vite + React</h2>

     <button >Count {count} </button>
     <br />
     <br />
     <button onClick={addValue}>Add Value</button>
     {/* <button onClick={removeVAlue}>Remove Value</button> */}
     {/* OR */}
     <button onClick={removeVAlue} disabled= {count===0}>Remove Value</button>
    </>
  )
}

export default App
