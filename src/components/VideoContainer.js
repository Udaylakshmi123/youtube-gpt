import { useEffect, useState } from "react";
import {YOUTUBE_VIDEO_API} from "../utils/constants";
import VideoCard,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[]);
    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const videos = await data.json();
        setVideos(videos.items);
    }
    return <div className="flex flex-wrap">
       {videos[0]&& <AdVideoCard video={videos[0]}/>}
       {videos && videos.map(video=> 
       <Link key={video.id} to={'/watch?v='+video.id}><VideoCard  video={video} /></Link>)}
    </div>
}
export default VideoContainer;