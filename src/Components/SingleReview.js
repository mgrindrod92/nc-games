import React, { useEffect, useState } from 'react';
import { FetchSingleReview } from '../Api';
import { useParams } from 'react-router-dom';
import Votes from './Votes';
import Comments from './Comments'

const SingleReview = (props) => {

    const { review_id } = useParams();
    const [currentReview, setCurrentReview] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [voteChange, setVoteChange] = useState(0);

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
            <ul className="singleReviewInfo">
                <li><div className="category">Game Category: {currentReview.review.category}</div></li>
                <li><div>Review created by: {currentReview.review.owner}</div></li>
                <li><div>Game created by: {currentReview.review.designer}</div></li>
                <li className="singleReview__createdAt"><div>Review created on {currentReview.review.created_at.slice(0,10)} at {currentReview.review.created_at.slice(11,19)}</div></li>
                <br></br>
                <li><div className="reviewBody">"{currentReview.review.review_body}"</div></li>             
            </ul> 
            <p>Did you find this review useful?</p>
            <Votes 
            votes = {currentReview.review.votes + voteChange}
            review_id={currentReview.review.review_id}
            setCurrentReview={setCurrentReview}
            />
            <p>Comments: {currentReview.review.comment_count}</p>
            <Comments
            review_id={currentReview.review.review_id}
            /> 
            </> : null }
            {/* </li> */}


        </div>
    )
}

export default SingleReview;