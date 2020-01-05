/**
 * FILENAME : middleware.js
 * DESCRIPTION : Common function's Area
 * CREATE DATE : 2020-01-03
 * CREATOR : YUN SANGHO
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
 *
 * UPDATE DATE :
 * UPDATOR :
 * UPDATE DESCRIPTION :
 */

import { Platform } from "react-native";

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

export { getPlatform };
