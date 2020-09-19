import React from 'react'

export default function SearchMovies() {
    return ( 
        <div>
            <form className="form">
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
