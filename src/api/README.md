# API

## weather

### url

- https://openweathermap.org

### method

- [x] getCurrentWeatherByLocation

- Description

  <pre>You can get the current weather by latitude, longitude coordinates of the location</pre>

- Call

  <pre>
  import { weather } from "{path}/api/weather";
  async () => {
      await weather.getCurrentWeatherByLocation();
  }
  </pre>

- Parameters

  <pre>
  No Parameters
  </pre>

- Returns

  <pre>
  clouds (Object)
    all - Cloudiness(%) / 흐림 / Integer
  
  coord (Object)
    lat - Latitude / 위도 / BigDecimal
    lon - Longitude / 경도 / BigDecimal
  
  main (Object)
    temp - Temperature / 현재기온 / BigDecimal
    temp_max - Maximum temperature / 최고기온 / BigDecimal
    temp_min - Minimum temperature / 최저기온 / BigDecimal
    pressure - Atmospheric pressure(hPa) / 기압 / Integer
    humidity - Humidity(%) / 습도 / Integer
  
  weather (Object in Array)
    id - Weather condition id / ID 값 / Integer
    main - Group of weather parameters / 날씨 유형 / String
    description - Weather condition within the group / 날씨 유형 상세정보 / String
    icon - Weather icon id / 날씨 아이콘 / String
  
  wind (Object)
    speed - Wind speed(m/s) / 풍속 / BigDecimal
    deg - Wind direction(degrees) / 풍향 / Integer
  </pre>
