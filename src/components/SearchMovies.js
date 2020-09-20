//Vendor libraries
import React, { useState } from 'react'

//Style
import '../components/SearchMovies.css';

//Components
import Movies from './Movies';

export default function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url); 
            const data = await res.json();
            setMovies(data.results)
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"></label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Bad Boys"
                    onChange={(e) => setQuery(e.target.value)}
                    >
                </input>
                <button className="button" type="submit">Search</button>                
            </form>
            <Movies movies={movies} />
        </div>
    )
}