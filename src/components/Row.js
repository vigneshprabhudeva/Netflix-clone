import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Row.css";

export default function Row(props) {
  const baseUrl = "https://image/tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  console.log(props.title);

  let isLasrge = false;
  if (props.title == "NETFLIX originals") {
    isLasrge = true;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);
  console.log(movies);
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className={`movie-list`}>
        {movies.map((data) => {
          return (
            <div>
              <img
                key={data.id}
                className={isLasrge ? "row_posterLarge" : "row_poster"}
                src={`https://image.tmdb.org/t/p/w500/${
                  !isLasrge ? data.backdrop_path : data.poster_path
                }`}
              />
              {/* {data.title} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
