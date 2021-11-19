import logo from "./logo.svg";
import "./App.css";
import Row from "./components/Row";
import request from "./request";
import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
function App() {
  const [isLargeRow, setIsLargeRow] = useState(true);
  console.log("hi");
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="NETFLIX originals" fetchURL={request.trending} />
      <Row title="Trending" fetchURL={request.netFlixOriginals} />
      <Row title="Thrillers" fetchURL={request.trending} />
    </div>
  );
}

export default App;
