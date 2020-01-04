/**
 * FILENAME : App.js
 * DESCRIPTION : Project init js
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getPlatform } from "./src/middleware/middleware";

class App extends React.Component {
  render() {
    console.log(getPlatform());
    return (
      <View style={styles.container}>
        <Text>TEMP SCREEN</Text>
      </View>
    );
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
