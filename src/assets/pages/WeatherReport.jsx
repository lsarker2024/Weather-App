import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faSun, faDroplet, faTemperatureHalf, faGauge, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const WeatherReport = ({cityName,citySubmitted}) => {
    return(
        <div className="flex flex-col">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">City Name</h2>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Country</p>
                <div className="my-4 text-amber-300">
                    <FontAwesomeIcon icon={faSun} className="text-6xl drop-shadow-md" />
                </div>
                <div className="text-5xl font-extrabold text-slate-800 mb-1"><span>--</span>°C</div>
                <p className="text-slate-700 capitalize font-medium">Clear Sky</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-sky-100 text-sky-500 p-2.5 rounded-lg">
                        <FontAwesomeIcon icon={faWind} className="drop-shadow-md" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Wind Speed</p>
                        <p className="text-lg font-bold text-slate-700">-- m/s</p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-teal-100 text-teal-500 p-2.5 rounded-lg">
                        <FontAwesomeIcon icon={faDroplet} className="drop-shadow-md" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Humidity</p>
                        <p className="text-lg font-bold text-slate-700">--%</p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-amber-100 text-amber-500 p-2.5 rounded-lg">
                        <FontAwesomeIcon icon={faTemperatureHalf} className="drop-shadow-md" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Feels Like</p>
                        <p className="text-lg  font-bold text-slate-700">--°C</p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                    <div className="bg-indigo-100 text-indigo-500 p-2.5 rounded-lg">
                        <FontAwesomeIcon icon={faGauge} className="drop-shadow-md" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 font-medium">Pressure</p>
                        <p className="text-lg font-bold text-slate-700">-- hPa</p>
                    </div>
                </div>
            </div>
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-sky-500/30 transition duration-200 hover:cursor-pointer"
                    onClick={citySubmitted}>
                <FontAwesomeIcon icon={faArrowLeft} className="drop-shadow-md" /> Back to search
            </button>
        </div>
    );
}
export default WeatherReport;