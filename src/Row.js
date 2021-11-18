import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="movie-list">
        {movies.map((data) => {
          return (
            <div>
              <img src={data.poster_path} />
              {data.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
