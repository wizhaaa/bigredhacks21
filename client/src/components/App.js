import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes></Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
