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
<<<<<<< HEAD
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="NETFLIX originals" fetchURL={request.trending} />
      <Row title="Trending" fetchURL={request.netFlixOriginals} />
      <Row title="Thrillers" fetchURL={request.trending} />
=======
    <div>
<<<<<<< HEAD
      hikjhbkjbk
=======
      achante achar
>>>>>>> c174386c7d3b642c1de929cfbacfbccbf1fba5b6
      <Row title="netflix originals" fetchURL={request.trending} />
      <Row title="trending" fetchURL={request.trending} />
      <Row title="thrillers" fetchURL={request.trending} />
>>>>>>> ae1cef956de9506bd5f68a18e1440d36c90d3355
    </div>
  );
}

export default App;
