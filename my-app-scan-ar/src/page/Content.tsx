import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Schedule from '../components/Body/Schedule'
import IsnotSupport from '../components/ฺBrowser/IsnotSupport';
import { AppCtx } from '../hook/context';


const Content = () => {
  const [weather, setWeather] = useState<Object>({})
  // context 
  const appContext = useContext(AppCtx);
  useEffect(() => {
    const getlocation = async () => {
      if (appContext?.mylocation[0].isGeolocationEnabled === false) {
        console.log("pls open GPS");
      } else {
        if (appContext?.mylocation[0].lat != undefined && appContext?.mylocation[0].log != undefined) {
          getWeather(appContext?.mylocation[0].lat, appContext?.mylocation[0].log)
          console.log(appContext?.mylocation[0].lat);
        } else {
          console.log("time out");
        }
      }
    }
    getlocation()
  }, [])

  //get สภาพอากาศ 
  const getWeather = (lat: any, lon: any) => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_URI}nearest_city?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_TOKEN}`,
    }).then(function (response) {
      setWeather(response)
    });
  }
  console.log(weather);
  
  return (
    <div className=' mb-4'>
      <Schedule />
    </div>
  )

}

export default Content