import axios from 'axios';

const gamesAPI = axios.create({
    baseURL: 'https://nc-be-games-project.herokuapp.com/api'
})

export function FetchReviews(category) {
    return gamesAPI
        .get("/reviews", {params: {category}})
        .then(( { data } ) => {
            return data.reviews;
        })
}

export function FetchSingleReview(review_id) {
    return gamesAPI
    .get(`/reviews/${review_id}`)
    .then(({ data }) => {
        return data;
    })
}

export function FetchCategories() {
    return gamesAPI
        .get("/categories")
        .then(( { data } ) => {
            return data.categories;
        })
}

export function PatchVotes(review_id, votes) {
    return gamesAPI
    .patch(`/reviews/${review_id}`, {inc_votes: votes})
    .then(({ data }) => {
        return data;
    })
}

export function FetchComments (review_id) {
    return gamesAPI
    .get(`/reviews/${review_id}/comments`)
    .then(( { data } ) => {
        return data;
    })
}

export function PostComment (review_id, newComment) { 
    console.log(newComment);
    return gamesAPI
    .post(`/reviews/${review_id}/comments`, newComment)
    .then(( { data } ) => {
        return data;
    })
}