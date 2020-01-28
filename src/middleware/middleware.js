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

/**
 * FUNC NAME : setItem
 * DESCRIPTION : set AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const setItem = (key, value) => {
  AsyncStorage.setItem(key, value, error => {
    if (error) {
      console.log(error);
    }
  });
};

/**
 * FUNC NAME : getItem
 * DESCRIPTION : get AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const getItem = async key => {
  const data = await AsyncStorage.getItem(key, (error, result) => {
    if (error) {
      console.log(error);
    }
  }).then(value => {
    return value;
  });
  return data;
};

/**
 * FUNC NAME : modifyItem
 * DESCRIPTION : modify AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const mergeItem = (key, value) => {
  AsyncStorage.mergeItem(key, value, error => {
    if (error) {
      console.log(error);
    }
  });
};

/**
 * FUNC NAME : removeItem
 * DESCRIPTION : remove AsyncStorage Item.
 * CREATEOR : NOH JAEMIN
 * TEST : COMPLATE
 */
const removeItem = key => {
  AsyncStorage.removeItem(key, error => {
    if (error) {
      console.log(error);
    }
  });
};

const Storage = {
  setItem,
  getItem,
  mergeItem,
  removeItem
};

export { getPlatform, Storage as AsyncStorage };
