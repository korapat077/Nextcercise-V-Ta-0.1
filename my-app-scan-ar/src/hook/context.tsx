import { createContext } from "react";

export interface AppContextInterface {
  mylocation:[
    {
      // พิกัด
      lat:any,
      log:any,
      // เช็ค บราวเซอร์ ซัพพอร์ตไหม 
      isGeolocationAvailable:any , 
      // เช็ค เปิด GPS 
      isGeolocationEnabled:any 
    }
  ]
}
export const AppCtx = createContext<AppContextInterface | null>(null);


export interface queryWeather {
  
}