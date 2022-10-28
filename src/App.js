import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { useState, useRef } from "react";
import MovieContextProvider from "./context/MovieContext";
function App() {
  const [title, setTitle] = useState({
    name: `/trending/all/day`,
    search: "/",
    query: "",
  });

  const categoryTitle = useRef("TRENDING NOW");
  return (
    <MovieContextProvider>
      <div className="App">
        <Header setTitle={setTitle} categoryTitle={categoryTitle} />
        <div className="home">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  title={title}
                  setTitle={setTitle}
                  categoryTitle={categoryTitle}
                />
              }
            />
            {/* <Route path="/contact_us/" element={<Contact />} /> */}
            <Route
              path="/genres/:name"
              element={
                <Home
                  title={title}
                  setTitle={setTitle}
                  categoryTitle={categoryTitle}
                />
              }
            />
            <Route
              path="/:name"
              element={
                <Home
                  title={title}
                  setTitle={setTitle}
                  categoryTitle={categoryTitle}
                />
              }
            />
            <Route
              path="/movie/:name"
              element={
                <Home
                  title={title}
                  setTitle={setTitle}
                  categoryTitle={categoryTitle}
                />
              }
            />
            <Route
              path="/my-favourites"
              element={
                <Home
                  title={title}
                  setTitle={setTitle}
                  categoryTitle={categoryTitle}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </MovieContextProvider>
  );
}

export default App;
