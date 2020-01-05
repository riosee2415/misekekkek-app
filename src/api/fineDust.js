/**
 * FILENAME : fineDust.js
 * DESCRIPTION : FineDust Open API using functions's Area
 * CREATE DATE : 2020-01-05
 * CREATOR : NOH JAEMIN
 *
 * UPDATE DATE :
 * UPDATOR :
 * UPDATE DESCRIPTION :
 */

import axios from "axios";

const params = {
  baseURL: "http://openapi.airkorea.or.kr/openapi/services/rest/",
  api_key:
    "rfRV3R6zINGZulW2XMDwP6vDVNWaFHSzsD8ZH2FoR3eaEOxMXd1CIl3PCkc%2FyOmm%2FxPNV8CJTLQQ8HxHXZco7Q%3D%3D",
  returnType: "json"
};

const getCurrentAddress = async () => {
  return await "대전광역시 유성구 지족동";
};

const getTMStdrCrdntByAddr = async () => {
  const address = await getCurrentAddress();
  const { data } = await axios.get(
    `${params.baseURL}MsrstnInfoInqireSvc/getTMStdrCrdnt?umdName=${address}&ServiceKey=${params.api_key}&_returnType=${params.returnType}&ver=1.3`
  );
  return data.list[0];
};

const getNearbyMsrstnList = async () => {
  const tmStdr = await getTMStdrCrdntByAddr();
  const { data } = await axios.get(
    `${params.baseURL}MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmStdr.tmX}&tmY=${tmStdr.tmY}&ServiceKey=${params.api_key}&_returnType=${params.returnType}`
  );
  return data.list;
};

export const fineDust = {
  getNearbyFineDust: async (dataTerm = "daily") => {
    const msrstnList = await getNearbyMsrstnList();
    const { data } = await axios.get(
      `${params.baseURL}ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${msrstnList[0].stationName}&dataTerm=${dataTerm}&ServiceKey=${params.api_key}&_returnType=${params.returnType}&ver=1.3`
    );
    return data.list;
  }
};
