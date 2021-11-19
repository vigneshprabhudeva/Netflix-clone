import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, handleShow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  return (
    <div className={`nav ${!show && "nav_black"}`}>
      <div className="nav_part1">
        <img
          className="nav__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="netflix logo"
        ></img>
        <Link className="nav_link" to="/">
          Home
        </Link>
        <Link className="nav_link" to="/">
          TV Shows
        </Link>
        <Link className="nav_link" to="/">
          Movies
        </Link>
        <Link className="nav_link" to="/">
          Recently added
        </Link>
        <Link className="nav_link" to="/">
          My List
        </Link>
      </div>
      <div className="nav_part2">
        <img
          className="nav__logo2"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix logo"
        ></img>
      </div>
    </div>
  );
}
