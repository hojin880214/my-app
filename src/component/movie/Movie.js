import {Link} from "react-router-dom";

function Movie({aa,id}) {
    return (
        <div key={aa}><h2><Link to={`/movie/${id}`}>{aa}</Link></h2>
            <p>{aa}</p>
            <hr></hr>
        </div>
    );

}
export default Movie;