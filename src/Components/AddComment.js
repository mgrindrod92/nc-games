import { useState, useEffect } from 'react';
import { PostComment } from '../Api';

const AddComment = () => {
    const [commentBody, setCommentBody] = useState('');
    const [posted, setPosted] = useState(false);

    const handleSubmitComment = (event) => {
        event.preventDefault();
        setPosted(true);

    };

    useEffect(() => {
        const newComment = {
            body: commentBody,
            username: `mallionaire`
        }

        if (posted) {
            PostComment(review_id, newComment)
            .then(() => {
                alert("Your comment has been added. Please refresh the page to view your comment")
            })
            .then(() => {
                setCommentBody('');
            })
        }
    }, [posted, review_id]);

    return (
        <div className="AddComment">
            <h3>Submit a comment below</h3>
            <form className="AddComment__form"></form>
        </div>
    )
}

export default AddComment;