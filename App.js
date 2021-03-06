/**
 * FILENAME : App.js
 * DESCRIPTION : Project init js
 * CREATE DATE : 2020-01-03
 * CREATOR : YUN SANGHO
 *
 * UPDATE DATE : 2020-01-05
 * UPDATOR : KIM KYOUNGMIN
 * UPDATE DESCRIPTION : Tab-Navigation can enter setting screen
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getPlatform } from "./src/middleware/middleware";
import MainNavigation from "./src/navigation/Navigation";
import { geoAddress } from "./src/api/kakaoApi";
import { fineDust } from "./src/api/fineDust";

class App extends React.Component {
  componentDidMount = async () => {
    console.log(await fineDust.getNearbyFineDust());
  };
  render() {
    console.log(`Current Platform :`, getPlatform());
    return <MainNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
