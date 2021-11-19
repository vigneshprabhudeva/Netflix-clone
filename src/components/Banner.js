import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import "./Banner.css";

export default function Banner() {
  let random = 0;

  const [movie, setmovie] = useState([]);
  const [desc, setdesc] = useState("");
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api.themoviedb.org/3/trending/all/week?api_key=cd9d173bac0943235d474e06d94f52af",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        random = Math.round(Math.random() * response.data.results.length);
        console.log(response.data.results[random]);
        setmovie(response.data.results[random]);
        setdesc(
          response.data.results[random].overview.substring(0, 150) + "..."
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(desc);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "centre centre",
      }}
    >
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">Mylist</button>
        </div>
        <p className="banner_description">{desc}</p>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
}
