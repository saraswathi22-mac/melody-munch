import React from "react";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
