import { useState } from "react";
import WeatherReport from "./WeatherReport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [cityName,setCityName] = useState('');
    const [submitCity,setSubmitCity] = useState(false);
    if(submitCity==true){
        return(
            <WeatherReport cityName={cityName} citySubmitted={()=>setSubmitCity(false)} />
        );
    }
    return(
        <div className="flex flex-col items-center justify-center py-8">
            <div className="bg-sky-100 p-4 rounded-full text-sky-500 mb-4 shadow-inner">
                <FontAwesomeIcon icon={faCloudSun} className="text-4xl" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Check the Weather</h1>
            <p className="text-slate-500 text-sm mb-6 text-center">Enter a city name to get real-time atmospheric updates.</p>
            
            <form className="w-full flex flex-col gap-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" id="city-input" placeholder="e.g., London, Tokyo, New York" required
                        value={cityName}
                        onChange={(e)=>setCityName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"/>
                </div>
                <button type="submit" 
                    onClick={()=>setSubmitCity(true)}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-sky-500/30 transition duration-200 hover:cursor-pointer">
                    Get Weather
                </button>
            </form>
        </div>
    );
}
export default Home;