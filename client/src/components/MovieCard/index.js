import React from 'react';
import Axios from 'axios';

// local import
import './styles.css';

const MovieCard = ({movie}) => {

    const deleteMovie = (movies) => {
        Axios.delete(`http://localhost:3003/api/delete/${movies}`)
    };

    return(
        <div className="card">    
        <div className="container">
            <h4><b>{movie.movieName}</b></h4> 
                <p>{movie.movieLength} min</p>  
                <p>Made on {movie.movieDate}</p>
                <p>Recommend? {movie.movieRecommend? "Yes" : "No"}</p>
            <button onClick={() => {deleteMovie(movie.movieName)}}>Delete</button>
            <input type='text' />
            <button>Update</button>
        </div>
        </div>
    ) 
}

export default MovieCard;