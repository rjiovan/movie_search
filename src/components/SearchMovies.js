import React from 'react'
import '../components/SearchMovies.css';

export default function SearchMovies() {

    const searchMovies = async (e, query) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    }

    return ( 
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"></label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. iRobot"
                    >
                </input>
                <button className="button" type="submit">Search</button>                
            </form>
        </div>
    )
}