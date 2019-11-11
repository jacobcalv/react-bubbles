import React, { useState } from "react";
import {Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (

      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>

  );
}

export default App;
