import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {closeMenu} from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = ()=>{
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
     useEffect(()=>{
        dispatch(closeMenu())
        getVideoById();
        },[]);
        const getVideoById = async()=>{
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=AIzaSyAVvPW1xvd6VvjWlVWPq27O18lcbxAtx2k`);
            const videoData = await data.json();
           console.log(videoData,'video data')
        }
    return <div className="px-5 mt-5 w-full">
        <div className="flex w-full">
        <div className="w-[60%]"><iframe width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
        <div className="w-[35%]"><LiveChat /></div>
        </div>
        <CommentsContainer />
        </div>
}
export default Watch;