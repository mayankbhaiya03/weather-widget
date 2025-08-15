 import { useState } from 'react';
 import SearchBox from './SearchBox.jsx';
 import InfoBox from './InfoBox.jsx'
 

export default  function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
         city:"Mumbai",
        feelsLike:30.5,
        humidity:75,
        temp:27.6,
        tempMax:27.6,
        tempMin:27.6,
        weather:"scattered clouds"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(<div>
        <h2>Weather Widget</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>);


}