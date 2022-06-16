import { Link } from "react-router-dom";

const ReviewInfo = ( review ) => {
    const seeMore = review.review_body.substring(0,150) + "..."

    return (
        <li className="ReviewInfo">
            <Link to={`/reviews/review/${review.review_id}`} className="Link" key={review.review_id}><h3 id="ReviewInfoTitle">{review.title} </h3></Link>
            <img className="ReviewImage" src={review.review_img_url} alt={review.title} />
            <p className="Preview">{seeMore}</p>
            <p className="SeeMore">See More</p>

        </li>
    )
}

export default ReviewInfo;