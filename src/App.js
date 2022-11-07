
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useEffect} from 'react'

function App() {

  const [data, setData] = useState({})
  const apiKey = "06b55b625373968ca03a1c939ee0c34c"
  const [inputCity, setInputCity] = useState({})





  const getWeatherDetails = (cityName) => {
    if(!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("Response", res.data)
      setData(res.data)



    }).catch((err) =>{
      console.log("err", err)
    })
  }

  const handleChangeInput=(e) => {
    setInputCity(e.target.value)

  }

  const handleSearch =() =>{
    getWeatherDetails(inputCity)
  }


  useEffect(()=>{
    getWeatherDetails("Toronto")
  }, [])




  return (
    <div className="App">
      <div className='col-md-12'>
        <div className='weatherBg'>
          <h1 className='heading'>weather app</h1>


              <div className='d-grid col-4 gap-3 mt-4'>
              <input type ="text" className="form-control"
              value={inputCity} onChange={handleChangeInput}/> 
              <button className='btn btn-primary' type="button"
              onClick={handleSearch}>
                Search</button>
              </div>      
        </div>
        
        <div className='col-md-12 text-center mt-5'>
          <div className='shadow rounded weatherResultBox'>

            <img className='weathericon' src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"/>

            <h5 className='weathercity'>{data?.name}</h5>
            <h6 className='weathertemp'>{((data?.main?.temp)-273.15).toFixed(2)} C</h6>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
