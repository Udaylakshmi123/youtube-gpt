import { useState } from "react";

const DemoPage = ()=>{
    const [enteredVal, setEnteredVal] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (<div className={"border border-black rounded-lg w-96 h-96 m-4 p-2 " + (!isDarkTheme && "bg-gray-800 text-white")}>
        <button className="border bg-green-300" onClick={(e)=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        <input className="border text-black border-gray-900 px-2 m-2" type="text" value={enteredVal} onChange={(e)=> setEnteredVal(e.target.value)}/>
        <p className="">{enteredVal}</p>
    </div>)
}
export default DemoPage;