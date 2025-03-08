import { useRef, useState } from "react";

const Reference = ()=>{
    const [y, setY] = useState(0);
    let x=0;
    const z = useRef(0);
    const add = ()=>{
        x= x+1;
        setY(y+1);
        z.current = z.current + 1;
    }
    return (<div className="border border-black rounded-lg w-96 h-96 m-4 p-2 ">
        <h1>Let =  {x}x- {y}y- {z.current}z</h1>
        <button className="border border-black rounded-lg p-2" onClick={()=>add()}>ADD</button>
    </div>)
}
export default Reference;