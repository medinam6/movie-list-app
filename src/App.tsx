import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
