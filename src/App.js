import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './components/pages/Home';
import Login from './components/Login';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
      <section>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {(this.props.auth0.isAuthenticated &&  <Home/> )}
                {!this.props.auth0.isAuthenticated && (<Login/>)}
                </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated && (<Profile/>)}
              </Route>
            </Switch>
        </Router>
        </section>
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);