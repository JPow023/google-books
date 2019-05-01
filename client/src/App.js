import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import SavedBooks from './pages/SavedBooks';


const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/savedbooks" component={SavedBooks} />
    </Router>
  );
}

export default App;