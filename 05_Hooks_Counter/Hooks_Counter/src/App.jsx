import { useState } from 'react'    // hook use to propagate the state
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // let counter = 15;
  let [counter, setcounter] = useState(15);   // use that could take any  parameter and it returns a array of two keys one variable and second as a function
    // setfunction is responsible to update the variable
  const addValue = () => {
    console.log("Button is working", Math.random());
    // if we changes the counter outside an infinite loop will start to take place in which updation will continuously occur
    setcounter(counter + 1);    // this triggers the react to react and full dom is analysed as the state has now be changed
    console.log(counter);
  }
  const subValue = ()=>{
    setcounter(counter-1);
    console.log("Value subtracted to ",counter);    // this line take place first in the function as its fast for its queue
  }
  return (
    <>
      <h1>Mihir the Best</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add</button>       {/* onclick={function_without-parenthesis} ->  this sets the function execute when button is clicked*/}
      <button onClick={subValue}>Subtract</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
