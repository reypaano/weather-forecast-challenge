import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import moment from "moment";
import "./styles.css";
import { useHistory } from "react-router-dom";

const Weather = (props) => {
    const location = useLocation();
    const inputCity= location.state.city;
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const dateToday = moment().format("MM/DD/YYYY")
    const history = useHistory();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ inputCity +'&appid=6d9c4d510fa3ae1031ce84e473ae0b6b'
   
    useEffect(()=> {
       axios.get(url).then(function (response) {
            setData(response.data)
            setLoading(false);
        })
    },[])

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }
return (
   
    <> {console.log(data.main.temp)}
    <div className="page-container">
        <table>
        <caption>Search Result</caption>
            <thead>
        <tr>
          <th scope="col">Date (MM/DD/YYYY)</th>
          <th scope="col">Temp (F)</th>
          <th scope="col">Description</th>
          <th scope="col">Main</th>
          <th scope="col">Pressure</th>
          <th scope="col">Humidity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{dateToday}</td>
        <td>{data.main.temp}</td>
        <td>{data.weather[0].description}</td>
        <td>{data.weather[0].main}</td>
        <td>{data.main.pressure}</td>
        <td>{data.main.humidity}</td>
        </tr>
        
        
      </tbody></table>

      <table className="table-responsive">
        <caption>Search Result</caption>
            <thead>
        <tr>
          <th scope="col">Date (MM/DD/YYYY)</th>
          <th scope="col">Temp (F)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{dateToday}</td>
        <td>{data.main.temp}</td>
        </tr>
        
        
      </tbody></table>
    <div align="right">
    <button  className="back-button" onClick={history.goBack}>Back</button>
    </div>
     
    
    </div>
  
    </>
)
};

export default Weather;