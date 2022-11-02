import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useGeolocated } from "react-geolocated";
import { AppContextInterface, AppCtx } from '../hook/context';
import IsnotSupport from '../components/ฺBrowser/IsnotSupport';
import { PlsopenGPS } from '../components/ฺBrowser/PlsopenGPS';

const Navbarlayout = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 3000,
    });
  const sampleAppContext: AppContextInterface = {
    mylocation: [
      {
        lat: coords?.latitude,
        log: coords?.longitude,
        isGeolocationAvailable: isGeolocationAvailable,
        isGeolocationEnabled: isGeolocationEnabled,
      }
    ]
  };
  if (isGeolocationAvailable === false) {
    return (
      <div>
        <IsnotSupport />
      </div>
    )
  } else {
    if (coords != undefined) {
      console.log(coords);
      return (
        <div>
          <AppCtx.Provider value={sampleAppContext}>
            <Navbar />
            <Outlet />
          </AppCtx.Provider>
        </div>
      )
    }
    return (
      <div>
        <PlsopenGPS />
      </div>
    )

  }
}
export default Navbarlayout;