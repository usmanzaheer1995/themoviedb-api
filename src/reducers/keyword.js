const keywordReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_KEYWORDS':
            return action.keywords;
        case 'ADD_KEYWORD':
            return [
                ...state,
                {
                    uuid: action.uuid,
                    keyword: action.keyword
                }
            ];
        default:
            return state;
    }
}

export { keywordReducer as default }