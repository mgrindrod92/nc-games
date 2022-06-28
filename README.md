# Board Games Review App

# Links

Hosted version of this app: https://mgrindrod-codetest-site.netlify.app/ 

Github repository the backend counterpart to this app: https://github.com/mgrindrod92/Backend-Project-NC-Games- 

Hosted backend version of this app: https://nc-be-games-project.herokuapp.com/api/reviews

# Summary

This app displays reviews for different board games, all of which can be viewed by following the 'Reviews' tab at the top of the page. Reviews can be sorted by date, number of votes or comment count (each of which can be arranged in ascending or descending order).

Individual reviews can be accessed by selecting the relevant board game card, which gives further information to the user about that game, including all comments. Each user may give one upvote or downvote to each review. It is also possible to leave comments on each review, and it is possible to delete your own comment if you wish. Basic error handling has been added, e.g. when searching for a review that does not exist.

# Node requirements

To run this app locally, you must have a node version of 16.0.0 or higher.

# How to run this app locally

To deploy this app locally (using Ubuntu) the following steps should be taken: 

1) Clone the repository in the terminal: 

git clone https://github.com/mgrindrod92/nc-games

2) Change into the directory:

cd nc-games

3) Install required dependencies:

npm i

4) Deploy the app with localhost:

npm start

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).