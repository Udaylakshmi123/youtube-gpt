import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";


const LiveChat = ()=>{
   const dispatch = useDispatch();
   const [liveMessage,setLiveMessage] = useState();
   const chatData = useSelector(store=> store.chat.messages);
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({name:generateRandomName(), description:generateRandomMessage(20)}))
        },1500);
        return () => clearInterval(i)
    },[]);

    return (<><div className="w-full h-[500px] flex flex-col-reverse overflow-y-auto bg-slate-100 p-2 border rounded-lg mx-12">
    {chatData.length>0 && chatData.map((chat,i)=> <ChatMessage key={i} data={chat} /> )}
    </div>
    <form onSubmit={(e)=>{ 
        e.preventDefault();
        dispatch(addMessage({name:'You', description:liveMessage}));
        setLiveMessage('')
        }} className="w-full p-2 mx-12 border flex items-center">
        <input type="text" className="w-[90%] px-2 border" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} placeholder="Enter comment"/>
        <button className="px-2 mx-2 bg-green-500">Submit</button>
        </form>
    </>);
}

export default LiveChat;