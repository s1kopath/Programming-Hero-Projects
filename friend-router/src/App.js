import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';



function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friend/:friendid">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
