import {useEffect, useState} from "react";
import Movie from "../component/movie/Movie";

function MovieInformation() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=816f0ce97381139e2c5e7d5563060df0`);
        const json = await response.json();
        setMovies(json.movieListResult.movieList);
        setLoading(false);
    }

    useEffect(()=>{
        getMovies();
    }, [])
    return (
        <div>
            {loading ? <strong>Loading...</strong> :
                <div>
                    {movies.map(movie => <Movie key={movie.movieCd} aa={movie.movieCd} id={movie.movieCd}/>)}
                </div>}
        </div>
    );
}

export default MovieInformation;