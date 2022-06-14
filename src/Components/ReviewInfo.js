const ReviewInfo = ( { review_id, title, category, designer, review_body, review_img_url, owner, votes, comment_count }) => {
    const seeMore = review_body.substring(0,150) + "..."

    return (
        <li className="ReviewInfo">
            <h3 id="ReviewInfoTitle">{title} </h3>
            <img className="ReviewImage" src={review_img_url} alt={title} />
            <p className="Preview">{seeMore}</p>
            <p className="SeeMore">See More</p>

        </li>
    )
}

export default ReviewInfo;