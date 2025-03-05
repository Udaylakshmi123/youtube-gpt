const VideoCard= ({video})=>{
    if(!video) return null;
    const {snippet, statistics} = video;
    const {channelTitle,description,title,thumbnails} = snippet;
    return (<div className="p-2 m-2 w-60 shadow-lg">
        <img className="rounded-lg" alt='thumbnail' src={thumbnails.medium.url} />
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>)
}

export const AdVideoCard = ({video})=>{
    return (<div className="p-1 m-1 border border-red-900">
        <VideoCard video={video}/>
    </div>)
}

export default VideoCard;