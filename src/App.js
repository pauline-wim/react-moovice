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
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar>
          <Link className="navLinks" to="/">
            Home
          </Link>
          <Link className="navLinks" to="/weekly">
            Weekly
          </Link>
          <Link className="navLinks" to="/weekly-battle">
            Weekly Battle
          </Link>
          <Link className="navLinks" to="/popular">
            Popular
          </Link>
          <Link className="navLinks" to="/popular-battle">
            Popular Battle
          </Link>
          <Link className="navLinks" to="/favorites">
            Favorites
          </Link>
        </Navbar>
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

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  .navLinks {
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: orange;
  }
`;

export default App;
