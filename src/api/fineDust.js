/**
 * FILENAME : fineDust.js
 * DESCRIPTION : FineDust Open API using functions's Area
 * CREATE DATE : 2020-01-05
 * CREATOR : NOH JAEMIN
 *
 * UPDATE DATE : 2020-01-11
 * UPDATOR : KIM KYOUNGMIN
 * UPDATE DESCRIPTION : Fine Dust Api-Key Secure Coding
 */

import axios from "axios";
import { F_API_KEY } from "react-native-dotenv";

const params = {
  baseURL: "http://openapi.airkorea.or.kr/openapi/services/rest/",
  api_key: { F_API_KEY },
  returnType: "json"
};

/**
 * FUNC NAME : getCurrentAddress
 * DESCRIPTION : get Current Address by GPS.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 * RETURN : String (address)
 */
const getCurrentAddress = async () => {
  return await "대전광역시 유성구 지족동";
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
  const tmStdr = await getTMStdrCrdntByAddr();
  const { data } = await axios.get(
    `${params.baseURL}MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmStdr.tmX}&tmY=${tmStdr.tmY}&ServiceKey=${params.api_key}&_returnType=${params.returnType}`
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
    const { data } = await axios.get(
      `${params.baseURL}ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${msrstnList[0].stationName}&dataTerm=${dataTerm}&ServiceKey=${params.api_key}&_returnType=${params.returnType}&ver=1.3`
    );
    return data.list;
  }
};
