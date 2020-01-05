/* UPDATE DATE : 2020-01-05
   UPDATOR : KIM KYOUNGMIN
   UPDATE DESCRIPTION : Tab-Navigation can enter setting screen */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <TouchableOpacity
        onPressOut={() => navigation.navigate({ routeName: "Settings" })}
      >
        <Text>Go Setting</Text>
      </TouchableOpacity>
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

export default Main;
