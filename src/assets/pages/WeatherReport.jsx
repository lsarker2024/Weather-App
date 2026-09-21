import { useEffect, useState } from 'react';
import { getWeather } from '../services/get-weather';
const WeatherReport = ({cityName,citySubmitted}) => {
    //console.log(cityName);
    const [locationData, setLocationData]= useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [weatherData,setWeatherData]=useState('');
    const [isWDataLoading,setIsWDataLoading]=useState(true);

    useEffect(
        ()=>{
            fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
            .then((res)=>res.json())
            .then((data)=>setLocationData(data))
            .then(()=>setIsWDataLoading(true))
            .finally(()=>setIsLoading(false));
        },[cityName]
    );


    if(isLoading){
        return(
            <div>
                City Information Loading...
            </div>
        );
    }else{
        if(isWDataLoading){
            const fetchWeather = async()=>{
                    try {
                        const result = await getWeather(locationData.results[0].latitude, locationData.results[0].longitude)
                        console.log(result);
                        setWeatherData(result)
                        console.log(weatherData);
                        setIsWDataLoading(false);
                    } catch (error) {
                        console.log(error);
                    }
                }

            fetchWeather();
        }
       // const theWeather = getWeather(locationData.results[0].latitude, locationData.results[0].longitude);
       
    }

    if(isWDataLoading){
        return(
            <div>
                Weather Information Loading...
            </div>
        );
    }
    
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">{locationData.results[0].name}</h2>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{locationData.results[0].country}</p>
                <div className="my-4 bg-sky-100 p-4 rounded-full text-sky-500 shadow-inner text-7xl">
                    { 
                        (weatherData.icon=='clear')?<span>☀️</span>:
                        (weatherData.icon=='partly_cloudy')?<span>⛅️</span>:
                        (weatherData.icon=='cloudy')?<span>☁️</span>:
                        (weatherData.icon=='fog')?<span>🌫️</span>:
                        (weatherData.icon=='rain')?<span>🌧️</span>:
                        (weatherData.icon=='snow')?<span>❄️</span>:
                        (weatherData.icon=='storm')?<span>⛈️</span>:<span>☀️</span>
                    }
                    
                </div>
                <div className="text-5xl font-extrabold text-slate-800 mb-1"><span>{weatherData.temperature}</span>°C</div>
                <p className="text-cyan-700 capitalize text-xl">{weatherData.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-sky-100 text-sky-500 p-2.5 rounded-lg">
                        🍃
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Wind Speed</p>
                        <p className="text-lg font-bold text-slate-700">{weatherData.windSpeed*10} km/h</p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-teal-100 text-teal-500 p-2.5 rounded-lg">
                        💧
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Humidity</p>
                        <p className="text-lg font-bold text-slate-700">{weatherData.humidity}%</p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-amber-100 text-amber-500 p-2.5 rounded-lg">
                        🌡️
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Feels Like</p>
                        <p className="text-lg  font-bold text-slate-700">{weatherData.feelsLike}°C</p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-indigo-100 text-indigo-500 p-2.5 rounded-lg">
                        🌧️
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Rain</p>
                        <p className="text-lg font-bold text-slate-700">{weatherData.rain} mm</p>
                    </div>
                </div>
            </div>
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-sky-500/30 transition duration-200 hover:cursor-pointer"
                    onClick={citySubmitted}>
                ⬅️ Back to search
            </button>
        </div>
    );
}
export default WeatherReport;