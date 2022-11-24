import './App.css';
import MovieInformation from './routes/MovieInformation';
import Detail from "./routes/Detail";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./routes/Home";
import Map from "./routes/Map";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/movie" element={<MovieInformation/>}/>
          <Route path="/movie/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;