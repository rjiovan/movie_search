import React from 'react'
import '../components/SearchMovies.css';

export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault();
        const query = 'project power'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url); 
            const data = await res.json();
            console.log(data)
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
                    placeholder="i.e. iRobot"
                    >
                </input>
                <button className="button" type="submit">Search</button>                
            </form>
        </div>
    )
}