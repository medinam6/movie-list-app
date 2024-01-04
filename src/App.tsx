import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

import "./style/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
