import React, { useEffect, useState } from 'react';
import { FetchSingleReview } from '../Api';
import { useParams } from 'react-router-dom';
import Votes from './Votes';
import { PatchVotes } from '../Api';

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

    const handleUpVote = () => {
        setVoteChange((currVotes) => currVotes + 1);
        setCurrentReview((currReview) => {
            let copyOfReview = { ...currReview };
            copyOfReview.votes += 1;
            return copyOfReview;
        })
        PatchVotes(review_id, 1)
            // In case the API request fails
            .catch(() => {
                setVoteChange((currVotes) => currVotes - 1);
                setCurrentReview((currReview) => {
                    let copyOfReview = { ...currReview }
                    copyOfReview.votes -= 1;
                    return copyOfReview;
                })
            })
    }

    const handleDownVote = () => {
        setVoteChange((currVotes) => currVotes - 1);
        setCurrentReview((currReview) => {
            let copyOfReview = { ...currReview };
            copyOfReview.votes -= 1;
            return copyOfReview;
        })
        PatchVotes(review_id, -1)
            // In case the API request fails
            .catch(() => {
                setVoteChange((currVotes) => currVotes + 1);
                setCurrentReview((currReview) => {
                    let copyOfReview = { ...currReview };
                    copyOfReview.votes += 1;
                    return copyOfReview;
                })
            })
    }

    return (
        <div className="singleReviewSection">
            {/* <li  className="singleReview"> */}

            {isLoading ? <><h2 className="singleReviewHeader">{currentReview.title}</h2>
            <img className="ReviewImage" src={currentReview.review.review_img_url} alt={currentReview.title} />
            <ul className="singleReviewInfo">
                <li><div className="category">Game Category: {currentReview.review.category}</div></li>
                <li><div>Review created by: {currentReview.review.owner}</div></li>
                <li><div>Game created by: {currentReview.review.designer}</div></li>
                <li><div className="reviewBody">{currentReview.review.review_body}</div></li>
                <li><div>Comments: {currentReview.review.comment_count}</div></li>
                                    
            </ul> 
            <p>Did you find this review useful?</p>
            <Votes 
            votes = {currentReview.review.votes + voteChange}
            review_id={currentReview.review.review_id}
            setCurrentReview={setCurrentReview}
            /> 
            </> : null }
            {/* </li> */}


        </div>
    )
}

export default SingleReview;