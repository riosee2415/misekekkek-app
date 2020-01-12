# API

## weather

### url

- https://openweathermap.org

### method

- [x] getCurrentWeatherByLocation

- Description

  <pre>You can get the current weather data by latitude, longitude coordinates of the location</pre>

- Call

  ```js
  import { weather } from "{path}/api/weather";
  async () => {
    await weather.getCurrentWeatherByLocation();
  };
  ```

- Parameters

  <pre>
  No Parameters
  </pre>

- Returns

  <pre>
  clouds (Object)
    all - Cloudiness(%) / 흐림 / Number
  
  coord (Object)
    lat - Latitude / 위도 / Number
    lon - Longitude / 경도 / Number
  
  main (Object)
    temp - Temperature / 현재기온 / Number
    temp_max - Maximum temperature / 최고기온 / Number
    temp_min - Minimum temperature / 최저기온 / Number
    pressure - Atmospheric pressure(hPa) / 기압 / Number
    humidity - Humidity(%) / 습도 / Number
  
  weather (Object in Array)
    id - Weather condition id / ID 값 / Number
    main - Group of weather parameters / 날씨 유형 / String
    description - Weather condition within the group / 날씨 유형 상세정보 / String
    icon - Weather icon id / 날씨 아이콘 / String
  
  wind (Object)
    speed - Wind speed(m/s) / 풍속 / Number
    deg - Wind direction(degrees) / 풍향 / Number
  </pre>

## fineDust

### url

- https://www.data.go.kr/dataset/15034344/openapi.do

### method

- [x] getNearbyFineDust

- Description

  <pre>You can get the nearby fine dust data by dataTerm</pre>

- Usage

  ```js
  import { fineDust } from "{path}/api/fineDust";
  async () => {
    await fineDust.getNearbyFineDust();
    await fineDust.getNearbyFineDust("3month");
  };
  ```

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

# GEOCODING DOCS

<pre>
  https://developers.kakao.com/docs/restapi/local
</pre>

## KAKAO REST API - geoAddress

<pre>
  좌표값(경도, 위도)를 사용하여 주소를 얻어온다.
  - 좌표값에 따라 도로명주소는 null값일 수 있다.
</pre>

### USAGE

```js
componentDidMount = async () => {
    const coords = await getLocation();

    let geo = null;
    try {
      geo = await geoAddress(coords.longitude, coords.latitude);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        depth1: geo.region_1depth_name,
        depth2: geo.region_2depth_name,
        depth3: geo.region_3depth_name
      });
    }
  };
}
```

### PARAMETERS

| NAME | TYPE | REQUIRED | DESCRIPTION                |
| ---- | ---- | -------- | -------------------------- |
| log  | DATA | required | 좌표값 중 경도를 입력한다. |
| lat  | DATA | required | 좌표값 중 위도를 입력한다. |

### RETURN

<pre>
  address_name - 전체 주소
  main_address_no - 주소 중 지번
  region_1depth_name - 주소 중 '시'
  region_2depth_name - 주소 중 '구'
  region_3depth_name - 주소 중 '읍/면/동'
</pre>

- '구'가 없는 경우 1level씩 depth가 올라간다.
