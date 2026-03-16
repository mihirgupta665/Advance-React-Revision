import { useState } from "react"      // hooks are wrtten in curly braces
function App() {
	const [color, setColor] = useState("olive");
	console.log(color); // this will print the color in console
	return (
		// full-> 100%, screen -> 100vh
		<div className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}>		{/*// as two braces are already there so no need to write variables in third brace*/}      
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Violet"}} onClick={()=>setColor("violet")}>Violet</button>	
					{/* setColor is reference of a funtion but setColor("") is a function's return value and onClick expects a function so function need to be wrriten there*/ }
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Indigo"}} onClick={()=>setColor("Indigo")}>Indigo</button>
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Blue"}} onClick={()=> setColor("Blue")}>Blue</button>
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Green"}} onClick={()=> setColor("Green")}>Green</button>
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Orange"}} onClick={() => setColor("Orange")}>Orange</button>
					<button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Red"}} onClick={() => setColor("Red")}>Red</button>
				</div>
			</div>
		</div>      

	)
}

export default App
