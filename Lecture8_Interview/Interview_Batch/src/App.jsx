import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setcount] = useState(15);
	const addValue = () =>{
		console.log("Button add is working");
		// setcount(count+1);
		setcount(last => last+1);			
//setcount(last+1) :- increases the value by one but setount(last => last+1) takes the last updated value and increases by one
		setcount(last => last+1);
		setcount(last => last+1);
		setcount(last => last+1);
	}
	const subValue = () =>{
		console.log("Button sub is working");
		setcount(count => count-1);
		setcount(count => count-1);
		setcount(count => count-1);
		setcount(count => count-1);
	}
	return (
		<>
			<button onClick={addValue}>Add</button>
			<div>Counter : {count}</div>
			<button onClick={subValue}>Sub</button>
		</>
	)
}

export default App
