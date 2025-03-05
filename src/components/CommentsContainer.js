
const commentsData = [{
    name:'Akshay',
    comment: 'Hello',
    replies:[{
        name: 'Udaya',
        comment:'data',
        replies:[{
            name: 'Udaya',
            comment:'data'
        },{
            name: 'Udaya',
            comment:'data'
        }]
    },{
        name: 'Udaya',
        comment:'data'
    },{
        name: 'Udaya',
        comment:'data'
    }]
    },{
        name:'Akshay',
        comment: 'Hello',
        replies:[{
            name: 'Udaya',
            comment:'data'
    }]
    },{
        name:'Akshay',
        comment: 'Hello',
        replies:[{
            name: 'Udaya',
            comment:'data'
    }]
}];
const Comment = ({comment})=>{
    return <div className="flex my-4">
        <img className="w-14 h-14" src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png" alt="User" />
        <div className="ml-6">
        <h2 className="font-bold text-2xl">{comment.name}</h2>
        <h2>{comment.comment}</h2>
        {comment?.replies?.length>0 && comment.replies.map((reply,index)=>(<CommentsList key={index} commentList={reply}/>))}
        </div>
    </div>
}

const CommentsList = ({commentList})=>{
    return <Comment comment={commentList} />
}

const CommentsContainer = ()=>{
    return <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        {commentsData?.length > 0 && commentsData.map((comment,index)=>(<Comment key={index} comment={comment}/>))}
    </div>
}

export default CommentsContainer;