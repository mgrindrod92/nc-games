import { useState } from 'react'
import { DeleteComment } from '../Api'

const Delete = ({ comment }) => {
    const [confirmDelete, setConfirmDelete] = useState(false);

    let loggedInUser = 'jessjelly';

    const handleDelete = () => {
        if (loggedInUser === comment.author) {
            DeleteComment(comment.comment_id)
            .then((statusCode) => {
                if (statusCode === 204) {
                    alert('Comment successfully deleted. Please refresh the page.')
                }
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            alert('You may only delete your own comments!')
        }
    }
    return (
        <div>
            <button className="Comments__deleteButton"
            onClick={() => {
                setConfirmDelete(true);
            }}
            >
                Delete comment
            </button>
            { confirmDelete ? (
                <> 
                <p>Are you sure wish to delete this comment?</p>
                <div>
                    <button className="Delete__yesButton"
                    onClick={() => handleDelete()}
                    >
                        Yes
                    </button>
                    <button className="Delete__noButton"
                    onClick={() => handleDelete()}
                    > 
                    No
                    </button>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Delete;