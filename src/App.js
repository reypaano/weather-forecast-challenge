import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./components/pages/LandingPage";
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import Weather from './components/pages/Weather'
import "./App.css";


function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Switch> 
        <Route path="/" exact component={LandingPage}/>
        <Route path="/home-page" component={Home}/>
        <Route path="/weather-page" component={Weather}/>
        </Switch>
      </Router>
      {/* <h1>Auth0 Login</h1> */}
      {/* {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && ( */}
        <>
        </>
      {/* )} */}
    </div>
  );
}

export default App;
