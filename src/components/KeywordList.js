import React, { useContext } from 'react';

import AppContext from '../context/app-context';
import Keyword from './Keyword'

const KeywordList = () => {
    const { keywords } = useContext(AppContext);
    return (
        <div className="keywords-container">
            {keywords.length > 0 && <h3>Recent keywords</h3>}
            {keywords.map((item) => (
                <Keyword key={item.uuid} keyword={item.keyword} />
            ))}
        </div>
    );
}

export { KeywordList as default }