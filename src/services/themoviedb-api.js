import axios from "axios";

const fetchMoviesFromDB = (query) => {
    return new Promise(async (resolve, reject) => {
        const moviesurl =
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&query=${query}&primary_release_year=${new Date().getFullYear()}`;

        const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        try {
            // get movies list of current year and all genres list
            const [moviesRes, genresRes] = await Promise.all([axios.get(moviesurl), axios.get(genresUrl)]);

            // filter the movies from past 7 days
            const movies = moviesRes.data.results.filter(item => new Date(item.release_date) >= new Date().getDate() - 7);

            // place each movie into its each matching genre by genre_id
            const genres = genresRes.data.genres.map((genre) => {
                genre.movies = [];
                movies.forEach(movie => {
                    if (movie.genre_ids.includes(genre.id)) {
                        genre.movies.push(movie);
                    }
                });
                return genre;
            });
            return resolve({
                movies: genres,
                count: movies.length,
            });
        } catch (e) {
            return reject(e);
        }
    });
}

export { fetchMoviesFromDB }