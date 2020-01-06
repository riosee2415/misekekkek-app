/* UPDATE DATE : 2020-01-05
   UPDATOR : KIM KYOUNGMIN
   UPDATE DESCRIPTION : Tab-Navigation can enter setting screen */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Main = ({ navigation }) => {
  return (
    <LinearGradient colors={["#246db6", "#ffffff"]} style={styles.container}>
      <Text>Main Screen</Text>
      <TouchableOpacity
        onPressOut={() => navigation.navigate({ routeName: "Settings" })}
      >
        <Text>Go Setting</Text>
      </TouchableOpacity>
    </LinearGradient>
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
