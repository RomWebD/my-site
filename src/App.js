import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/layouts/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contacts from "./Components/Pages/Contacts";
import Price from "./Components/Pages/Price";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import Footer from "./Components/layouts/Footer";
import AboutUs from "./Components/Pages/AboutUs";

function App() {
  return (
    <div>
      <Header />
      <Router>
          <Switch>
            <Route exact path="https://romwebd.github.io/my-site/" component={Home} />
            <Route exact path="https://romwebd.github.io/my-site/price" component={Price} />
            <Route exact path="https://romwebd.github.io/my-site/contacts" component={Contacts} />
            <Route exact path="https://romwebd.github.io/my-site/aboutus" component={AboutUs} />
            <Route component={NotFoundPage} />

          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
