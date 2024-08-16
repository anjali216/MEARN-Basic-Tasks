
import './App.css'
import { FaTemperatureFull } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa6";
import { IoMdWater } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";

function App() {
  
  




  return (
    <>
     <div className='container  text-center' id='weatherContainer'>
       <div className='text-center justify-content-center align-items-center d-flex'>
       <div className='header' >
        <div className='search'>
          <input type="text" placeholder='Search for a city' className='searchform' id="i1" onKeyUp={KeyboardEvent} />
          <button type='button' onClick={"searchwheather()"}>Search</button>
        </div>  
        </div>

        </div>
        <div className="weatherbody">
                <h1 className="weather_city"></h1>
              <div className="weather_datetime">--</div>
                <div className="weather_forecast"></div>
                <div className="weather_icon">
                 <img src="" alt="" />
                </div>
                <p className="weather_temperature temp">--</p>
                
              </div>


        <div className=" weather__info  text-center justify-content-center align-items-center">
          <div className='weather_card'>
            <div>
            <FaTemperatureFull />
            </div>
            <div>  
              <p>Feels Like</p>
              <p className="weather_realfeel">--</p>
            </div>
          </div>
          <div className='weather_card'>
            <div>
            <IoMdWater />
            </div>
            <div>
            <p>Humidity</p>
            <p className="weather_humidity">--</p>
            </div>
          </div>
          
          <div className='weather_card'>
            <div>
            <FaWind />
            </div>
            <div>
              <p>Wind</p>
            <p className="weather_wind">--</p>
            </div>
          </div>
          <div className='weather_card'>
            <div>
            <FaArrowsAltV />
            </div>
            <div>
            <p>Pressure</p>
            <p className="weather__pressure">--</p>
            </div>
          </div>
          <div className='weather_card'>
            <div>
            <FaCloudSun />
            </div>
            <div>
            <p>Sunrise</p>
            <p className="weather_sunrise">--</p>
            </div>
          </div>
          
          <div className="weather_card">
            <div>
            <FaRegMoon />
            </div>
            <div>
             <p>Sunset</p>
               <p className="weather__sunset">--</p>
              </div>
          </div>
            

          
        </div>

</div>
    </>
  )
}
  
export default App
