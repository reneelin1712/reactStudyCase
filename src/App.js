import React from 'react';
import "./App.css";

import Home from './components/home';
import Rooms from './components/rooms';
import Single from './components/single';

import { Route } from 'react-router-dom';

import Nav from './components/nav';

function App() {
  return <>
  <Nav />
  <Route exact path="/" component={ Home }></Route>
  <Route exact path="/rooms/" component={ Rooms }></Route>
  <Route exact path="/rooms/:slug" component={ Single }></Route>
  </>
}

export default App;
