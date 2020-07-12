import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from './components/Login.js'
import Register from './components/Register.js'
import Dashboard from './components/Dashboard.js'
import UserTask from './components/User_task.js'
import LoggedIn_Index from './components/LoggedIn_Index.js'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Index" component={LoggedIn_Index} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/UserTask" component={UserTask} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
