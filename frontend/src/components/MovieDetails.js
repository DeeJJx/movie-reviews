import { useMoviesContext } from "../hooks/useMoviesContext";

const MovieDetails = ({ movie }) => {
    const { dispatch } = useMoviesContext();

    const handleClick = async () => {
        const response = await fetch('/api/movies/' + movie._id, {
            method: 'DELETE'
        } )

        const json = await response.json();

        if(response.ok){
            dispatch({ type: 'DELETE_MOVIE', payload: json })
        }
    }
    

    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>Length: {movie.length}</p>
            <p>Rating: {movie.stars} /5</p>
            <p>Submitted: {movie.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )  
}

export default MovieDetails;