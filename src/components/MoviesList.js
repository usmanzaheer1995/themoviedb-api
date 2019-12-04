import React, { useContext, useEffect, useState } from 'react';

import AppContext from '../context/app-context';
import Genres from './Genres';
import Movies from './Movies';

const MoviesList = () => {
    const { movies } = useContext(AppContext);

    const [genreMovies, setGenreMovies] = useState([]);
    const [genreName, setGenreName] = useState('');

    useEffect(() => {
        if (movies.moviesList && movies.moviesList.length > 0) {
            setGenreMovies(movies.moviesList[0].movies);
            setGenreName(movies.moviesList[0].name);
        }
    }, [movies]);

    const selectGenre = id => {
        const genre = movies.moviesList.filter(genre => genre.id === id)[0];
        setGenreMovies(genre.movies)
        setGenreName(genre.name);
    }

    return (
        <div className="movies-container">
            {
                movies.moviesList && movies.moviesList.length > 0
                ? <>
                    <div>Total movies from the past seven days: <strong>{movies.count}</strong></div>
                    <div className="movies-listing">
                        <Genres genres={movies.moviesList} selectGenre={selectGenre}/>
                        <Movies genreName={genreName} movies={genreMovies}/>
                    </div>
                </>
                : <>No Movies</>
            }
        </div>
    );
}

export { MoviesList as default }