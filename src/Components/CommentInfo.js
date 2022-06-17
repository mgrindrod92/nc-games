
const CommentInfo = ( {author, body, votes, review_id, comment_id} ) => {

    return (
        <li className="CommentInfo">
            <p className="CommentAuthor"><b>Author:</b> {author}</p>
            <p className="CommentBody">{body}</p>
        </li>
    )
}

export default CommentInfo;