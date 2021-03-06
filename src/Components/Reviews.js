import { FetchCategories, FetchReviews } from "../Api";
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import ReviewInfo from "./ReviewInfo";
import { useParams } from "react-router-dom";
import SortReviews from "./SortReviews";
import ErrorPage from "./Error";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const { category_name } = useParams();

    useEffect(() => {
        FetchReviews(category_name)
            .then((res) => {
                setReviews(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
            FetchCategories()
            .then((res) => {
                setCategory(res);
                setIsLoading(true)
            })
        // Dependency array updated to re-run search
    }, [category_name]);

    if (isError) {
        return <ErrorPage errorMessage={isError} />
    }

    const categoryDescription = category.filter(desc => desc.slug === category_name)

    return (
        <div className="review-list">
            <SortReviews setReviews={setReviews} reviews={reviews} />
            {isLoading ? <>
            <h3 className="reviewsPageTitle">Reviews</h3>
            <h4><p className="categories"><u>{category_name}</u></p></h4>
            <p>{(categoryDescription.length === 0 ? "" : categoryDescription[0].description)}</p>
            <ul className="reviews">
                {reviews.map((review) => {
                    const { review_id, title, category, designer, review_body, review_img_url, owner, votes, comment_count, created_at } = review;

                    return (
                        <ReviewInfo
                            key={review_id}
                            review_id={review_id}
                            title={title}
                            category={category}
                            designer={designer}
                            review_body={review_body}
                            review_img_url={review_img_url}
                            owner={owner}
                            created_at={created_at}
                            votes={votes}
                            comments={comment_count}
                        />
                    )
                })}
            </ul> </> : null }
        </div>
    )

}

export default Reviews;