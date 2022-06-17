import React, { useState } from 'react';
import { PatchVotes } from '../Api';

const Votes = ({ review_id, votes, setCurrentReview }) => {
    const [voteChange, setVoteChange] = useState(0);

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
        <>
        <p>Votes: {votes + voteChange}</p>
        <div className="votes__button-wrapper">
            <button className="upvoteButton"
                onClick={handleUpVote}
                disabled={voteChange > 0}>
                👍
            </button>
            <button className="downvoteButton"
                onClick={handleDownVote}
                disabled={voteChange < 0}>
                👎
            </button>
        </div>
        </>
    )

}

export default Votes;