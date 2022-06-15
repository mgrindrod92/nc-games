import React, { useEffect, useState } from 'react';
import { FetchSingleReview } from '../Api';
import { Link, useParams } from 'react-router-dom';
import ReviewInfo from './ReviewInfo';

const SingleReview = (props) => {

const { review_id } = useParams();
const [currentReview, setCurrentReview] = useState({})

useEffect(() => {
    if(review_id) {
    FetchSingleReview(review_id)
        .then((res) => {
            setCurrentReview(res);
        })
    }
}, [review_id])

return (
    <div className="singleReview">

        <ReviewInfo
            key={review_id}
            title={title}
            category={category}
            designer={designer}
            review_body={review_body}
            review_img_url={review_img_url}
            owner={owner}
            votes={votes}
            comments={comment_count}
        /* <p>{review.created_at}</p> */
        />

    </div>
)

}

export default FetchSingleReview;