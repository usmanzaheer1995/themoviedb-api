import React, { useContext, useState } from 'react';

import AppContext from '../context/app-context';

const FetchTweet = () => {
    const { dispatchKeywords } = useContext(AppContext);

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        if (input.length < 5) {
            setInput(e.target.value)
        }
    }

    const fetchTweets = () => {
        setLoading(true);
        setTimeout(() => {
            dispatchKeywords({ type: 'ADD_KEYWORD', keyword: input });
            setLoading(false);
        }, 1000);
    }

    return (
        <>
            {/* Ask user to enter keywords (5 max)  */}
            <input value={input} onChange={onChange}></input>
            <button disabled={loading} onClick={fetchTweets}>Fetch tweets</button>
        </>
    );
}

export { FetchTweet as default }
