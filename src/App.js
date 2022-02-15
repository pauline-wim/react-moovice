import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// PAGES

// CSS
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
