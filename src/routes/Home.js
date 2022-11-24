import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div><Link to={'/map'}>map</Link></div>
            <div><Link to={'/movie'}>movie</Link></div>
        </div>
    );
}