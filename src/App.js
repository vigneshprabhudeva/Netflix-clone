import logo from "./logo.svg";
import "./App.css";
import Row from "./components/Row";
import request from "./request";
import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [isLargeRow, setIsLargeRow] = useState(true);
  console.log("hi");
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
        <Row title="NETFLIX originals" fetchURL={request.trending} />
        <Row title="Trending" fetchURL={request.netFlixOriginals} />
        <Row title="Thrillers" fetchURL={request.trending} />
      </Router>
    </div>
  );
}

export default App;
