import React, { useEffect, useReducer } from 'react';

import AppContext from '../context/app-context';
import KeywordList from './KeywordList';
import keywordReducer from '../reducers/keyword';
import FetchMovies from './FetchMovies';

const App = () => {

    const [keywords, dispatchKeywords] = useReducer(keywordReducer, []);

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
        <AppContext.Provider value={{ keywords, dispatchKeywords }}>
            <FetchMovies />
            <KeywordList />
        </AppContext.Provider>
    );
}

export { App as default }