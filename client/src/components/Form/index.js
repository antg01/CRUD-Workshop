import React, {useState, useEffect} from 'react';
import Axios from 'axios';

// local import
import './styles.css';
import MovieCard from '../MovieCard/index';


const Form = () => {

    const [movieName, setMovieName] = useState('');
    const [movieDate, setMovieDate] = useState('');
    const [movieLength, setMovieLength] = useState('');
    const [movieRecommend, setMovieRecommend] = useState(false);

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3003/api/get').then((response) => {
            setMovieList(response.data)
        })
    }, [])

    const submitHandle = () => {
        Axios.post('http://localhost:3003/api/insert', {
            movieName: movieName, 
            movieDate: movieDate, 
            movieLength: movieLength, 
            movieRecommend: movieRecommend
        })
            setMovieList([...movieList, {
                movieName: movieName, 
                movieDate: movieDate, 
                movieLength: movieLength, 
                movieRecommend: movieRecommend
            }]);
        
        alert('Submited!')
    };

    return (
        <div >
            <h1 className="title">
                CRUD APP
            </h1>
            <div className="form">
                <label>Movie Name</label>
                <input type='text' name='movieName' onChange={(e) => {
                    setMovieName(e.target.value)
                }}/>
                <label>Date</label>
                <input type='date' name='movieDate' onChange={(e) => {
                    setMovieDate(e.target.value)
                }}/>
                <label>Movie length</label>
                <input type="number" name='movieLength' onChange={(e) => {
                    setMovieLength(e.target.value)
                }}/>
                <label>Recommend</label>
                <input type="checkbox" name='movieRecommend' onChange={(e) => {
                    setMovieRecommend(e.target.checked)
                }}/>

                <button onClick={submitHandle}>Submit</button>
            </div>

            <div className="border">
                {movieList.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
            
        </div>
    );
};

export default Form;