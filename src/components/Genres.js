import React from 'react';

const Genres = ({ genres, selectGenre }) => (
    <ul className="genre-list">
        {genres.map(({ id, name, movies }) => (
            <li key={id} onClick={() => selectGenre(id)}>{name} <strong>({movies.length})</strong></li>
        ))}
    </ul>
);

export { Genres as default }