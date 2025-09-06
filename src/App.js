import "./App.css";
import Header from "./Components/Header/Header";
import "./main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/movies/Movies";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </>
  );
}

export default App;
