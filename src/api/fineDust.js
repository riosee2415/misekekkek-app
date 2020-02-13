/**
 * FILENAME : fineDust.js
 * DESCRIPTION : FineDust Open API using functions's Area
 * CREATE DATE : 2020-01-05
 * CREATOR : NOH JAEMIN
 
 * UPDATE DATE : 2020-01-07
 * UPDATOR : YUN SANGHO
 * UPDATE DESCRIPTION : Dust API Data modifed in API
 *
 * UPDATE DATE : 2020-01-11
 * UPDATOR : KIM KYOUNGMIN
 * UPDATE DESCRIPTION : Fine Dust Api-Key Secure Coding
 * 
 * UPDATE DATE : 2020-01-21
 * UPDATOR : NOH JAEMIN
 * UPDATE DESCRIPTION : getCurrentAddress function modify
 *  
 * UPDATE DATE : 2020-01-22
 * UPDATOR : NOH JAEMIN
 * UPDATE DESCRIPTION : Api-Key Secure Coding Usage modify
 */

import axios from "axios";
import { geoAddress } from "./kakaoApi";
import { getLocation } from "./weather";

const params = {
  baseURL: "http://openapi.airkorea.or.kr/openapi/services/rest/",
  api_key:
    "gwgOFQcTz1OXVVg7nCx6B05%2B17ykz9X9GWRQfo8nwjWxuwfIY43OuBO%2ByxfWHWx1YqKAlHO0OZJVtd%2FxvDpTAg%3D%3D",
  returnType: "json"
};

const fineRestApi = axios.create({
  baseURL: "http://openapi.airkorea.or.kr/openapi/services/rest/"
});

/**
 * FUNC NAME : getCurrentAddress
 * DESCRIPTION : get Current Address using Kakao REST API.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 * RETURN : String (address)
 */
const getCurrentAddress = async () => {
  const coords = await getLocation();
  let geo = null;
  let address = null;
  try {
    geo = await geoAddress(coords.longitude, coords.latitude);
  } catch (error) {
    console.log(error);
  } finally {
    address = geo.address_name;
  }
  return await address;
};

/**
 * FUNC NAME : getTMStdrCrdntByAddr
 * DESCRIPTION : get TM Standard Coordinate by Address.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 * API PARAMS
 * - umdName : 읍면동, 시/군/구 사용가능
 * - ServiceKey : 인증키
 * - _returnType : xml or json
 * RETURN : Object (tmX, tmY)
 */
const getTMStdrCrdntByAddr = async () => {
  const address = await getCurrentAddress();
  const { data } = await axios.get(
    `${params.baseURL}MsrstnInfoInqireSvc/getTMStdrCrdnt?umdName=${address}&ServiceKey=${params.api_key}&_returnType=${params.returnType}`
  );
  /*
  let { data } = await axios({
    method: "get",
    url: `${params.baseURL}MsrstnInfoInqireSvc/getTMStdrCrdnt?umdName=${address}&ServiceKey=${params.api_key}&_returnType=${params.returnType}`
  })
    .then(function(response) {
      console.log("success");
      data = response.data;
    })
    .catch(function(error) {
      console.log("fail");
      console.log(error);
    })
    .then(function() {
      return data.list[0];
    });
  console.log(params.api_key);
  console.log(
    params.api_key ===
      "gwgOFQcTz1OXVVg7nCx6B05%2B17ykz9X9GWRQfo8nwjWxuwfIY43OuBO%2ByxfWHWx1YqKAlHO0OZJVtd%2FxvDpTAg%3D%3D"
  );
  */
  return data.list[0];
};

/**
 * FUNC NAME : getNearbyMsrstnList
 * DESCRIPTION : get Nearby Measuring station list.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 * API PARAMS
 * - tmX : TM 측정방식 X좌표
 * - tmY : TM 측정방식 Y좌표
 * - ServiceKey : 인증키
 * - _returnType : xml or json
 * RETURN : Array (근처 측정소 리스트)
 */
const getNearbyMsrstnList = async () => {
  //const tmStdr = await getTmsAddr();

  const { data } = await axios.post(
    `${params.baseURL}MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=234640.487848&tmY=317347.979649&ServiceKey=${params.api_key}&_returnType=${params.returnType}`
  );

  return data.list;
};

export const fineDust = {
  /**
   * FUNC NAME : getNearbyFineDust
   * DESCRIPTION : get Nearby FineDust by DataTerm.
   * CREATEOR : NOH JAEMIN
   * TEST : COMPLATE
   * PARAMS
   * - dataTerm : daily(default) or month or 3month
   * API PARAMS
   * - stationName : 측정소명
   * - dataTerm : 요청 데이터기간
   * - ServiceKey : 인증키
   * - _returnType : xml or json
   * - ver : 1.3 (PM10, PM2.5 1시간 등급 자료가 포함된 결과 표출)
   * RETURN : Object (findDust data)
   */
  getNearbyFineDust: async (dataTerm = "daily") => {
    const msrstnList = await getNearbyMsrstnList();

    console.log(msrstnList[0].stationName);
    console.log(params.api_key);

    const { data } = await axios.get(
      `${params.baseURL}ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${msrstnList[0].stationName}&dataTerm=${dataTerm}&ServiceKey=${params.api_key}&_returnType=${params.returnType}&ver=1.3`
    );

    console.log(data);
    return data.list;
  }
};
