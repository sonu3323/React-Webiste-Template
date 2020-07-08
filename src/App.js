import React from "react";
import "./styles.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Service from "./Components/Service";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/about"
          render={() => (
            <About
              header=" Welcome to About Page"
              para="Thank you for choosing us"
              
            />
          )}
        />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Service" component={Service} />
      </Switch>
    </div>
  );
};

export default App;
