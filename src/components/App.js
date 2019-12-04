import React, { useEffect, useReducer } from 'react';

import '../styles/styles.css';
import AppContext from '../context/app-context';
import KeywordList from './KeywordList';
import MoviesList from './MoviesList';
import keywordReducer from '../reducers/keyword';
import moviesReducer from '../reducers/movies';
import FetchMovies from './FetchMovies';

const App = () => {

    const [keywords, dispatchKeywords] = useReducer(keywordReducer, []);
    const [movies, dispatchMovies] = useReducer(moviesReducer, []);

    useEffect(() => {
        // Show history of searched keywords for current session
        const res = JSON.parse(sessionStorage.getItem('recent-keywords'))

        if (res) {
            dispatchKeywords({ type: 'POPULATE_KEYWORDS', keywords: res });
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('recent-keywords', JSON.stringify(keywords))
    }, [keywords]);

    return (
        <AppContext.Provider value={{ keywords, dispatchKeywords, movies, dispatchMovies }}>
            <FetchMovies />
            <div className="container">
                <MoviesList />
                <KeywordList />
            </div>
        </AppContext.Provider>
    );
}

export { App as default }