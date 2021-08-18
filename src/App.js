import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Reviews from "./components/pages/Reviews";
import Discover from "./components/pages/Discover";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
    }
  };
  render() {
    return (
      <>
        <section>
          <Router>
            {/* <Header /> */}
            <Switch>
              
              <Route exact path="/">
                {this.props.auth0.isAuthenticated && <Home />}
                {!this.props.auth0.isAuthenticated && <Login />}
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated && <Profile />}
              </Route>
              <Route exact path="/postCards"></Route>
              <Route exact path="/about-us">
                {this.props.auth0.isAuthenticated && <AboutUs />}
              </Route>
              <Route exact path="/reviews">
                {this.props.auth0.isAuthenticated && <Reviews />}
              </Route>
              <Route exact path="/about-us">
                {this.props.auth0.isAuthenticated && (<AboutUs/>)}
              </Route>
              <Route exact path="/reviews">
                {this.props.auth0.isAuthenticated && (<Reviews/>)}
              </Route>
              <Route exact path="/discover">
                {this.props.auth0.isAuthenticated && (<Discover/>)}
              </Route>
              
            </Switch>
          </Router>
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default withAuth0(App);
