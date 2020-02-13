/**
 * FILENAME : middleware.js
 * DESCRIPTION : Common function's Area
 * CREATE DATE : 2020-01-03
 * CREATOR : YUN SANGHO
 *
 * UPDATE DATE : 2020-01-28
 * UPDATOR : NOH JAEMIN
 * UPDATE DESCRIPTION : AsyncStorage function create
 *
 * UPDATE DATE : 2020-02-11
 * UPDATOR : getRankbyPm10
 * UPDATE DESCRIPTION : getRank for fineDust information
 *
 * UPDATE DATE :
 * UPDATOR :
 * UPDATE DESCRIPTION :
 *
 * UPDATE DATE :
 * UPDATOR :
 * UPDATE DESCRIPTION :
 *
 * UPDATE DATE :
 * UPDATOR :
 * UPDATE DESCRIPTION :
 */

import { Platform, AsyncStorage } from "react-native";

/**
 * FUNC NAME : getPlatform
 * DESCRIPTION : get current OS.
 * CREATEOR : YUN SANGHO
 * TEST : COMPLATE
 */
const getPlatform = () => {
  const currentOS = Platform.OS;

  return currentOS;
};

const defaultCallback = error => {
  if (error) {
    console.log(error);
  }
};

/**
 * FUNC NAME : setItem
 * DESCRIPTION : set AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const setItem = (key, value, callback) => {
  AsyncStorage.setItem(key, value, callback ? callback : defaultCallback);
};

/**
 * FUNC NAME : getItem
 * DESCRIPTION : get AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const getItem = async (key, callback) => {
  const data = await AsyncStorage.getItem(
    key,
    callback ? callback : defaultCallback
  ).then(value => {
    return value;
  });
  return data;
};

/**
 * FUNC NAME : mergeItem
 * DESCRIPTION : merge AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const mergeItem = (key, value, callback) => {
  AsyncStorage.mergeItem(key, value, callback ? callback : defaultCallback);
};

/**
 * FUNC NAME : removeItem
 * DESCRIPTION : remove AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const removeItem = (key, callback) => {
  AsyncStorage.removeItem(key, callback ? callback : defaultCallback);
};

const Storage = {
  setItem,
  getItem,
  mergeItem,
  removeItem
};

export { getPlatform, Storage as AsyncStorage };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Global Rank Data ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const rankGrade = {
  1: {
    min: 0,
    max: 0
  },
  2: {
    min: 0,
    max: 0
  },
  3: {
    min: 0,
    max: 0
  },
  4: {
    min: 0,
    max: 0
  },
  5: {
    min: 0,
    max: 0
  },
  6: {
    min: 0,
    max: 0
  },
  7: {
    min: 0,
    max: 999999999999
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * FUNC NAME : getRankByPm10
 * DESCRIPTION : get finedust rank
 * CREATEOR : YUN SANGHO
 * TEST : COMPLATE
 */
const getRankByPm10 = () => {
  const maxVal = 150;
  let currentVal = 0;
  try {
    currentVal = 120;
  } catch (error) {
    console.log("미세먼지 정보를 가져올 수 없습니다. 관리자에게 문의하세요.");
  }
  const grade = 7;

  const section = maxVal / (grade - 1);

  for (let i = 1; i < grade; i++) {
    rankGrade[i].min = section * (i - 1);
    rankGrade[i].max = section * i;
  }
  rankGrade[7].min = maxVal + 1;

  if (rankGrade[1].min <= currentVal && rankGrade[1].max >= currentVal) {
    return 1;
  } else if (rankGrade[2].min <= currentVal && rankGrade[2].max >= currentVal) {
    return 2;
  } else if (rankGrade[3].min <= currentVal && rankGrade[3].max >= currentVal) {
    return 3;
  } else if (rankGrade[4].min <= currentVal && rankGrade[4].max >= currentVal) {
    return 4;
  } else if (rankGrade[5].min <= currentVal && rankGrade[5].max >= currentVal) {
    return 5;
  } else if (rankGrade[6].min <= currentVal && rankGrade[6].max >= currentVal) {
    return 6;
  } else if (rankGrade[7].min <= currentVal && rankGrade[7].max >= currentVal) {
    return 7;
  } else {
    return 1;
  }
};

const Rank = {
  getRankByPm10
};

export { Rank };
