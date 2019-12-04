import React from 'react';

const Movies = ({ genreName, movies }) => {
    return (
        <ul>
            {
                movies.length > 0
                ? movies.map(movie => (
                    <li key={movie.id}>{movie.original_title}</li>
                ))
                : <div>No movies found in <strong>{genreName}</strong> genre</div>
            }
        </ul>
    );
}

export { Movies as default }