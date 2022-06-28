

const ErrorPage = ({ errorMessage }) => {
    return (
        <div>
            <h2 className="ErrorPage__header">Error! {errorMessage.status} - {errorMessage.data.msg}</h2> 
        <img src="https://pbs.twimg.com/media/ErK-6GaXMAAr1Rz.jpg" 
        alt="Joke error meme"
        />
        </div>
    )
}

export default ErrorPage;