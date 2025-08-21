import "./App.css";
import Header from "./Components/Header/Header";
import "./main.scss";
import { Routes, Route } from "react-router-dom";
import Trends from "./Components/Trends/Trends";
import Movies from "./Components/movies/Movies";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Trends/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </>
  );
}

export default App;
