import React, { useContext, useState } from 'react';

import AppContext from '../context/app-context';
import { fetchMoviesFromDB } from '../services/themoviedb-api';

const FetchMovies = () => {
    const { dispatchKeywords } = useContext(AppContext);

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        if (input.length < 5) {
            setInput(e.target.value)
        }
    }

    const fetchMovies = () => {
        setLoading(true);
        fetchMoviesFromDB(input);
        setTimeout(() => {
            dispatchKeywords({ type: 'ADD_KEYWORD', keyword: input });
            setLoading(false);
        }, 1000);
    }

    return (
        <>
            {/* Ask user to enter keywords (5 max)  */}
            <input value={input} onChange={onChange}></input>
            <button disabled={loading} onClick={fetchMovies}>Fetch Movies</button>
        </>
    );
}

export { FetchMovies as default }
