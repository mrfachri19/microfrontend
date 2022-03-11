import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "homepage/Header";
import Footer from "homepage/Footer";
import Productdetailcontent from "productdetail/Productdetailcontent";
import HomeContent from "homepage/HomeContent";
import CartContent from "cart/CartContent";

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto w-full bg-gray-300">
        <Header />
        <div className="my-10 p-14">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/product/:id" component={Productdetailcontent} />
            <Route path="/cart" component={CartContent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
