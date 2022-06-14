import axios from 'axios';

export function FetchReviews() {
    return axios
        .get("https://nc-be-games-project.herokuapp.com/api/reviews")
        .then((res) => {
            return res.data;
        })
}