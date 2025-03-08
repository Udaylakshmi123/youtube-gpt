const ChatMessage = (props)=>{
    const data = props.data;
    return (<div className="p-2 flex items-center">
        <img className="w-5 h-5 mr-2" src='https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png' alt="User" />
        <span><b className="mr-1">{data.name}</b> {data.description}</span>
    </div>);
}

export default ChatMessage;