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

export function FetchCategories() {
    return gamesAPI
        .get("/categories")
        .then(( { data } ) => {

            return data.categories;
        })
}