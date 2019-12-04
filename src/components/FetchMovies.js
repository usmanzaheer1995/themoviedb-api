import React, { useContext, useState } from 'react';

import AppContext from '../context/app-context';
import { fetchMoviesFromDB } from '../services/themoviedb-api';

const FetchMovies = () => {
    const { dispatchKeywords, dispatchMovies } = useContext(AppContext);

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // generate unique uuid for each keyword (https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
    const uuidv4 = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const fetchMovies = async () => {
        setLoading(true);
        setError('');
        try {
            const { movies, count } = await fetchMoviesFromDB(input);
            dispatchKeywords({ type: 'ADD_KEYWORD', uuid: uuidv4(), keyword: input });
            dispatchMovies({ type: 'POPULATE_MOVIES', moviesList: movies, count });
            setInput('');
        } catch (e) {
            console.log(e);
            setError("Something went wrong while fetching movies");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* Ask user to enter keywords (5 max)  */}
            <input maxLength="5" value={input} onChange={onChange}></input>
            <button disabled={loading} onClick={fetchMovies}>Fetch Movies</button>
            {error && (<div>
                {error}
            </div>)}
        </>
    );
}

export { FetchMovies as default }
