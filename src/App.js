import "./App.css";
import Header from "./Components/Header/Header";
import "./main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/movies/Movies";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Casts from "./Components/Cast/Casts";
import Reviews from "./Components/Reviews/Reviews";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>+
          <Route path="cast" element={<Casts/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
