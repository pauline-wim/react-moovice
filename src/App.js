import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import Popular from "./pages/Popular";
import WeeklyBattle from "./pages/WeeklyBattle";
import PopularBattle from "./pages/PopularBattle";
import Favorites from "./pages/Favorites";
// CSS
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weekly" component={Weekly} />
          <Route exact path="/weekly-battle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular-battle" component={PopularBattle} />
          <Route exact path="/favorites" component={Favorites} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
