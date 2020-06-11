import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import EntradaAnimada from "./components/EntradaAnimada/EntradaAnimada";
import GeradorMegaSena from "./components/Geradormegasena/Geradormegasena";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Mega">
            <GeradorMegaSena />
          </Route>
          <Route path="/">
          <EntradaAnimada />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
