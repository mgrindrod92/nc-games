import { FetchReviews } from "../Api";
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import ReviewInfo from "./ReviewInfo";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { category_name } = useParams();

    useEffect(() => {
        FetchReviews(category_name)
            .then((res) => {
                setReviews(res);
            });
            // Dependency array updated to re-run search
    }, [category_name]);

    return (
        <div className="review-list">
            <h2 className="reviewsPageTitle">Reviews</h2>

            <ul className="reviews">
                {reviews.map((review) => {
                    const { review_id, title, category, designer, review_body, review_img_url, owner, votes, comment_count } = review;
                        
                    return (
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
                    )
                })}
            </ul>
        </div>
    )

}

export default Reviews;