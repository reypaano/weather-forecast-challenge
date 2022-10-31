import React from "react";
import {useState} from 'react'
import { Button, FormGroup, TextField, withStyles } from "@material-ui/core";
import axios from 'axios'
import LandingPage from "./LandingPage";

import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";


const Home = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const [city, setCity] = useState('');
    const [data, setData] = useState({})
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=6d9c4d510fa3ae1031ce84e473ae0b6b'

  
    const searchCity= () => {
        axios.get(url).then(function (response) {
          setData(response.data)
          console.log(response.data);
          props.history.push('/weather-page', { city: city })
      })
   }
   
return (
    <>
        {isAuthenticated ? (
        <>
        <div className="center-container">
          <article className="column">
            <h1>Hello!</h1>
            <h2>{user?.name}</h2>
            <h2>{user?.sub}</h2>
          </article>
          <div className="page-container" >
            <div className="search">
                <input className="search-input"
                    type="text"
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    placeholder="Enter City"
                    ></input>
            </div>
            <button className="search-button" variant="contained" onClick={searchCity}>
                Display Weather
            </button>
          </div>
        </div>
            
        </>
        ): 

            <div><LandingPage/></div>
        }
    </>

)
};

export default Home;