import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import LoginPage from "../src/contents/Components/LoginPage";
import SignUpPage from "../src/contents/Components/SignUpPage";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import Home from "../src/contents/Components/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home show={true} />
            </Route>
            <Route path="/SignUpPage">
              <SignUpPage />
            </Route>
            <Route path="/LoginPage">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
