# API

## weather

### url

- https://openweathermap.org

### method

- [x] getCurrentWeatherByLocation

- Description

  <pre>You can get the current weather data by latitude, longitude coordinates of the location</pre>

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

## fineDust

### url

- https://www.data.go.kr/dataset/15034344/openapi.do

### method

- [x] getNearbyFineDust

- Description

  <pre>You can get the nearby fine dust data by dataTerm</pre>

- Call

  <pre>
  import { fineDust } from "{path}/api/fineDust";
  async () => {
    await fineDust.getNearbyFineDust(); 
    await fineDust.getNearbyFineDust("3month"); 
  }
  </pre>

- Parameters

  <pre>
  dataTerm - 요청 데이터기간(1일: daily, 1개월: month, 3개월: 3month) / default daily / String
  </pre>

- Returns

  <pre>
  dataTime - 측정일 / String
  mangName - 측정망 정보 (국가배경, 교외대기, 도시대기, 도로변대기) / String
  so2Value - 아황산가스 농도 / Number
  coValue - 일산화탄소 농도 / Number
  o3Value - 오존 농도 / Number
  no2Value - 이산화질소 농도 / Number
  pm10Value - 미세먼지(PM10) 농도 / Number
  pm10Value24 - 미세먼지(PM10) 24시간 예측이동 농도 / Number
  pm25Value - 미세먼지(PM2.5) 농도 (초미세먼지) / Number
  pm25Value24 - 미세먼지(PM2.5) 24시간 예측이동 농도 / Number
  khaiValue - 통합대기환경수치 / Number
  khaiGrade - 통합대기환경지수 / Number
  so2Grade - 아황산가스 지수 / Number
  coGrade - 일산화탄소 지수 / Number
  o3Grade - 오존 지수 / Number
  no2Grade - 이산화질소 지수 / Number
  pm10Grade - 미세먼지(PM10) 24시간 등급 / Number
  pm25Grade - 미세먼지(PM2.5) 24시간 등급 / Number
  pm10Grade1h - 미세먼지(PM10) 1시간 등급 / Number
  pm25Grade1h - 미세먼지(PM2.5) 1시간 등급 / Number
  </pre>
