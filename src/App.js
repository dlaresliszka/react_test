import React from 'react';
import './App.css';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import  checkout from './pages/checkout/checkout';

function index() {
  return <h2>Inicio</h2>;
}

function products() {
  return <h2>Productos</h2>;
}

function App() {
  return (
      <Router>
        <div>
          <div className="topnav">
            <Link className="active" to="/">Inicio</Link>
            <Link to="/checkout/">Checkout</Link>
            <Link to="/products/">Products</Link>
          </div>

          <Route path="/" exact component={index} />
          <Route path="/checkout/" component={checkout} />
          <Route path="/products/" component={products} />
        </div>
      </Router>
  );
}

export default App;
