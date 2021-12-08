import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/layouts/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
            <Route exact path="/" component={Home} />
            <Route exact path="/price" component={Price} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route component={NotFoundPage} />

          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
