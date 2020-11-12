import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatApp from "./containers/ChatApp";
import Login from "./containers/Login";
import Register from "./containers/Register";
import MainContainer from "./containers/MainContainer";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuthenticated();
    console.log("rendered");
  }, [isAuthenticated]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? (
            <ChatApp>
              <Navbar setIsAuthenticated={setIsAuthenticated} />
              <MainContainer />
            </ChatApp>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login">
          {!isAuthenticated ? (
            <Login setIsAuthenticated={setIsAuthenticated}></Login>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/register">
          {!isAuthenticated ? (
            <Register setIsAuthenticated={setIsAuthenticated}></Register>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
