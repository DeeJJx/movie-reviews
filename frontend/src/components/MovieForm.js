import { useState } from "react"
import { useMoviesContext } from "../hooks/useMoviesContext";

const MovieForm = () => {
    const { dispatch } = useMoviesContext();
    const [title, setTitle] = useState('');
    const [length, setLength] = useState('');
    const [stars, setStars] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const movie = {title, length, stars};

        const response = await fetch('/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }

        if(response.ok){
            setTitle('');
            setLength('');
            setStars('');
            setError(null);
            setEmptyFields([]);
            console.log('new movie added', json);
            dispatch({type: 'CREATE_MOVIE', payload: json});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Movie Title</label>
            <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className={emptyFields.includes('title') ? 'error': ''}
            />
            <label>Movie Length</label>
            <input
             type="number"
             value={length}
             onChange={(e) => setLength(e.target.value)}
             className={emptyFields.includes('length') ? 'error': ''}
            />
            <label>Movie Stars</label>
            <input
             type="number"
             value={stars}
             onChange={(e) => setStars(e.target.value)}
             className={emptyFields.includes('stars') ? 'error': ''}
            />
            <button>Add movie</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default MovieForm;