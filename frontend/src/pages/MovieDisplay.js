import React, { useState } from 'react';
import { useMoviesContext } from '../hooks/useMoviesContext';

const MovieDisplay = () => {
    const {movies, dispatch} = useMoviesContext();
    const [hiddenIndices, setHiddenIndices] = useState([]);

    const handleClick = (index) => {
        if (hiddenIndices.includes(index)) {
            setHiddenIndices(hiddenIndices.filter(i => i !== index));
        } else {
            setHiddenIndices([...hiddenIndices, index]);
        }
    }

    return (
        <div className='movieName'>
            {movies && movies.map((movie, index) => (
                <div className='movie-card' key={movie.id} onClick={() => handleClick(index)}>
                    <div className='movie-title'>
                        {movie.title}
                    </div> 
                    {hiddenIndices.includes(index) && (
                        <div className='movie-details'>
                            <p>Length: {movie.length}</p>
                            <p>Stars: {movie.stars}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default MovieDisplay;