import React from "react";
import { useState } from 'react';
import Home from "./Home";
// import { Switch, Route } from "react-router-dom";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Login from "./login/login";
import Register from "./register/register";

const App = () => {
  const [ user, setLoginUser] = useState({})
  return (
    <>
   <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/login" component={() => <Login setLoginUser={setLoginUser}></Login>}></Route>
        <Route path="/register" component={Register}></Route>
        <Route component={Error}></Route>
      </Switch>
      </Router>
      
    </>
  );
};

export default App;
