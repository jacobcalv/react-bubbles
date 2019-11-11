import React, { useState } from "react";
import {Route, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import {getToken} from './utils/axiosWithAuth'
import "./styles.scss";

function App() {
  const areYouSignedIn = getToken()

  return (

      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubblepage' component={BubblePage}/>

      </div>

  );
}

export default App;
