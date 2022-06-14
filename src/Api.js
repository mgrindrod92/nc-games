import axios from 'axios';

export function FetchReviews() {
    return axios
        .get("https://nc-be-games-project.herokuapp.com/api/reviews")
        .then((res) => {
            return res.data;
        })
}

export function FetchCategories() {
    return axios
        .get("https://nc-be-games-project.herokuapp.com/api/categories")
        .then((res) => {

            // console.log(res.data)
            return res.data;
        })
}