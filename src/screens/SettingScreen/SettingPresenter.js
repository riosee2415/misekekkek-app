/* UPDATE DATE : 2020-01-05
   UPDATOR : KIM KYOUNGMIN
   UPDATE DESCRIPTION : Tab-Navigation can enter setting screen */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Setting;
