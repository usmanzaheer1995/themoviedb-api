import axios from "axios";

const fetchMoviesFromDB = async (query) => {
    const url =
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&query=${query}`;
    try {
        const { data } = await axios.get(url);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

export { fetchMoviesFromDB }