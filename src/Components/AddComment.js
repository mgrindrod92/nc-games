import { useState, useEffect } from 'react';
import { PostComment } from '../Api';
import { useParams } from 'react-router-dom';

const AddComment = () => {
    const { review_id } = useParams();
    const [commentBody, setCommentBody] = useState('');
    const [posted, setPosted] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handleSubmitComment = (event) => {
        event.preventDefault();
        setPosted(true);
        setSubmit(true);
    };

    useEffect(() => {
        const newComment = {
            body: commentBody,
            username: `jessjelly`
        }

        if (posted) {
            PostComment(review_id, newComment)
            .then(() => {
                console.log('Hi');
                alert("Your comment has been added. Please refresh the page to view your comment")
            })
            .then(() => {
                setCommentBody('');
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [posted, review_id]);

    return (
        <div className="AddComment">
            <h3>Submit a comment below</h3>
            <form className="AddComment__form" onSubmit={handleSubmitComment}>
            <textarea
            className="AddComment__input"
            rows="5"
            cols="100"
            type="text"
            minLength={10}
            maxLength={250}
            required
            onChange={(event) => {
                setCommentBody(event.target.value)
            }}
            ></textarea>
            <input
            type="submit"
            value="Submit"
            className="AddComment__Submit"
            disabled={submit}
            ></input>
            </form>
        </div>
    )
}

export default AddComment;