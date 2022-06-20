import { useState } from 'react';

const SortReviews = ({ setReviews, reviews }) => {

    const [sorted, setSorted] = useState(true);

    const handleSort = (SortReviews) => {
        if (sorted) {
            const copyOfReviews = [...reviews];
            let sorted = copyOfReviews.sort((a, b) => {
                let keyA = new Date(a[SortReviews]),
                keyB = new Date(b[SortReviews]);

                if (keyA > keyB) return 1;
                if (keyA < keyB) return -1;
                return 0;
            });
            setReviews(sorted);
            setSorted(false);
        } else {
            const copyOfReviews = [...reviews];
            let sorted = copyOfReviews.sort((a, b) => {
            let keyA = new Date(a[SortReviews]),
            keyB = new Date(b[SortReviews]);
            
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
            })
            setReviews(sorted);
            setSorted(false);
        }
    }
    return (
        <div className="reviews__sortButtonWrapper">
            <h4>Sort by:</h4>
            {/* For some reason the data 'sort by' isn't working */}
            <button className="reviews__sortButton"
            onClick={() => {
                handleSort("created at");
            }}
            >
                Date
            </button>
            <button
            className="reviews__sortButton"
            onClick={() => {
                handleSort("comment_count")
            }}
            >
                Comment count
            </button>
            <button className="reviews__sortButton"
            onClick={() => {
                handleSort("votes")
            }}
            >
                Votes
            </button>
        </div>
    )
}

export default SortReviews;