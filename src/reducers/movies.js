const moviesReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_MOVIES':
            return {
                moviesList: action.moviesList,
                count: action.count,
            };
        default:
            return state;
    }
}

export { moviesReducer as default }