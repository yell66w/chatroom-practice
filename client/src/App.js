import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChatApp from './containers/ChatApp';
import Login from './containers/Login';
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <ChatApp />
          </Route>
        </Switch>
    </Router>
  )
}
export default App
