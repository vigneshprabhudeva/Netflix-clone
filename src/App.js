import logo from "./logo.svg";
import "./App.css";

import Row from "./Row";
import request from "./request";

function App() {
  console.log("hi");
  return (
    <div>
      hikjhbkjbkjnkj
      <Row title="netflix originals" fetchURL={request.trending} />
      <Row title="trending" fetchURL={request.trending} />
      <Row title="thrillers" fetchURL={request.trending} />
    </div>
  );
}

export default App;
