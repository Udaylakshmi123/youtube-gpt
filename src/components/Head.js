import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../utils/navSlice";
import { useEffect, useState } from "react";
import { SUGGEST_YOUTUBE_API } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice";

const Head = ()=>{
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions]= useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache = useSelector(store=>store.search);
    const toggleHandleMenu = ()=>{
        dispatch(toggleMenu())
    };
    useEffect(()=>{
      const timer = setTimeout(()=>{
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }else{
        searchSuggestion()
    }},200);
      return()=>{
        clearTimeout(timer);
      }
    },[searchQuery]);

    const searchSuggestion = async()=>{
      const data = await fetch(SUGGEST_YOUTUBE_API+searchQuery);
      const jsonData = await data.json();
      setSuggestions(jsonData[1]);
      dispatch(cacheResults({[searchQuery]:jsonData[1]}))
    }
return <div className="flex justify-between shadow-lg">
    <div className="flex">
    <img onClick={()=>toggleHandleMenu()} className="w-10 cursor-pointer h-10 m-4" src="https://thumbs.dreamstime.com/b/three-bar-line-icon-symbol-menu-outline-modern-design-element-simple-black-flat-vector-sign-rounded-corners-three-bar-line-110910924.jpg" alt="Menu" />
    <a href="/"><img className="w-32 h-16 mt-1" src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt="logo" /></a>
    </div>
    <div className="flex items-center w-[50%] justify-center">
      <div className="relative w-full">
        <input type="text" className="pl-2 w-full pr-4 py-2 border rounded-3xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion(false)} />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img src="https://th.bing.com/th/id/OIP.rsZB5iKwX6totSXcV94swQHaHN?rs=1&pid=ImgDetMain" alt="Search" className="h-5 w-5" />
        </span>
        {showSuggestion && <ul className="absolute top-12 w-full rounded-lg border-gray-100 p-2 bg-white">
        {suggestions && suggestions.map(suggestion=>
          <li key={suggestion} className="py-1 flex hover:bg-gray-100 cursor-pointer items-center"><img src="https://th.bing.com/th/id/OIP.rsZB5iKwX6totSXcV94swQHaHN?rs=1&pid=ImgDetMain" alt="Search" className="h-4 w-4 m-2" /> {suggestion}</li>
        )}
      </ul>}
      </div>
      <span className="bg-gray-200 ml-5 border rounded-full p-2">
        <img className="w-5 h-5" src="https://icon-library.com/images/google-voice-icon-png/google-voice-icon-png-26.jpg" alt="Voice" />
      </span>
    </div>
    <div className="flex  mt-4 mr-8">
    <img className="w-8 h-8 mt-1" src="https://p.kindpng.com/picc/s/482-4820634_bell-bell-icon-font-awesome-hd-png-download.png" alt="Notification" />
    <img className="w-10 h-10 ml-5" src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png" alt="User" />
    </div>
</div>
}
export default Head;