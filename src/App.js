import logo from "./logo.svg";
import "./App.css";

import Row from "./Row";
import request from "./request";

function App() {
  console.log("hi");
  return (
    <div>
<<<<<<< HEAD
      hikjhbkjbk
=======
      achante achar
>>>>>>> c174386c7d3b642c1de929cfbacfbccbf1fba5b6
      <Row title="netflix originals" fetchURL={request.trending} />
      <Row title="trending" fetchURL={request.trending} />
      <Row title="thrillers" fetchURL={request.trending} />
    </div>
  );
}

export default App;
