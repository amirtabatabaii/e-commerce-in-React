import React from "react";
import { Switch, Route } from "react-router-dom";

import "./css/App.css";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/product/product-list/ProductList";
import Details from "./components/product/details/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/default/Default";
import Modal from "./components/product/modal/Modal";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product-list' component={ProductList} />
        <Route exact path='/details' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
