import React, { useEffect, useState } from 'react';
import { FetchSingleReview } from '../Api';
import { useParams } from 'react-router-dom';

const SingleReview = (props) => {

    const { review_id } = useParams();
    const [currentReview, setCurrentReview] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (review_id) {
            FetchSingleReview(review_id)
                .then((res) => {
                    setCurrentReview(res);
                    setIsLoading(true);
                })
        }
    }, [review_id])
    // Or dependent on currentReview?

    return (
        <div className="singleReviewSection">
            {/* <li  className="singleReview"> */}

            {isLoading ? <><h2 className="singleReviewHeader">{currentReview.title}</h2>
            <img className="ReviewImage" src={currentReview.review.review_img_url} alt={currentReview.title} />
            <ul className="singleReviewInfo" key={currentReview.review.review_id}>
                <li><div className="category">Game Category: {currentReview.review.category}</div></li>
                <li><div>Review created by: {currentReview.review.owner}</div></li>
                <li><div>Game created by: {currentReview.review.designer}</div></li>
                <li><div className="reviewBody">Review: {currentReview.review.review_body}</div></li>
                <li><div>Votes: {currentReview.review.votes}</div></li>
                <li><div>Comments: {currentReview.review.comment_count}</div></li>
            </ul> </> : null }
            {/* </li> */}

        </div>
    )

}

export default SingleReview;