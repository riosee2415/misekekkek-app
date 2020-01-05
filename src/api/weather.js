/**
 * FILENAME : weather.js
 * DESCRIPTION : Weather Open API using functions's Area
 * CREATE DATE : 2020-01-05
 * CREATOR : NOH JAEMIN
 *
 * UPDATE DATE :
 * UPDATOR :
 * UPDATE DESCRIPTION :
 */

import axios from "axios";
import * as Location from "expo-location";

const params = {
  baseURL: "http://api.openweathermap.org/data/2.5/",
  api_key: "b1e69cf636fd7783aeddaf8252ace45a",
  units: "metric"
};

/**
 * FUNC NAME : getLocation
 * DESCRIPTION : get Current Location Coordinate.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 * RETURN : Object (lat, lon)
 */
const getLocation = async () => {
  try {
    await Location.requestPermissionsAsync();
    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigations
    });
    return coords;
  } catch (error) {
    console.log("failed get location");
  }
};

export const weather = {
  /**
   * FUNC NAME : getCurrentWeatherByLocation
   * DESCRIPTION : get Current Weather by Location.
   * CREATEOR : NOH JAEMIN
   * TEST : COMPLATE
   * API PARAMS
   * - lat : 위도
   * - lon : 경도
   * - APPID : 인증키
   * - units : imperial(화씨온도 사용), metric(섭씨온도 사용)
   * RETURN : Object (weather data)
   */
  getCurrentWeatherByLocation: async () => {
    const coords = await getLocation();

    const { data } = await axios.get(
      `${params.baseURL}weather?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${params.api_key}&units=${params.units}`
    );
    return data;
  }
};
