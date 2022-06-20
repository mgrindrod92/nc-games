import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchComments } from '../Api';
import CommentInfo from './CommentInfo';
import AddComment from './AddComment';
import Delete from './Delete';

const CommentList = (props) => {

    const { review_id } = useParams();
    const [allComments, setAllComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        FetchComments(review_id)
        .then((allComments) => {
            setAllComments(allComments);
            setIsLoading(false);
            // Switch isLoading (Lines 10 (should be false) and 18 (should be true))
        })
    }, [review_id])

    return (
        <div>
        <AddComment review_id={review_id} />
        <div className="commentList">
            {!isLoading ? <>
            <h3>Comments</h3>
            <ul className="AllComments">
                {allComments.map((comment) => {
                    const { author, body, votes, review_id, comment_id } = comment;

                    return (
                        <div>
                        <CommentInfo
                        key={comment_id}
                        author={author}
                        body={body}
                        votes={votes}
                        />
                        <div>
                        <Delete comment={comment} />
                        </div>
                        </div>

                    )
                })}
            </ul>
        
            </> : null}
        </div>
        </div>
    )

}

export default CommentList;