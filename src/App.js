import logo from "./logo.svg";
import "./App.css";

import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div>
      <Row title="netflix originals" fetchURL={request.trending} />
      <Row title="trending" fetchURL={request.trending} />
      <Row title="thrillers" fetchURL={request.trending} />
      clone
    </div>
  );
}

export default App;
