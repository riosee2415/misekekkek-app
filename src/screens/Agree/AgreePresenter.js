/* CREATE DATE : 2020-02-12
   UPDATOR : KIM HANJU
   UPDATE DESCRIPTION : Agree Screen */

import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { publicColor } from "../../middleware/publicColor";

const { width, height } = Dimensions.get("window");

class AgreePresenter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>미세켁켁 개인정보처리방침</Text>
        <View style={styles.agreeContainer}>
          <Text style={styles.content}>개인정보처리방침</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: publicColor.bgWhite
  },
  title: {
    color: publicColor.gray,
    fontSize: 20,
    margin: 20
  },
  agreeContainer: {
    alignItems: "center",
    width: "94%",
    height: height,
    padding: 10,
    backgroundColor: publicColor.agreeContainer
  },
  content: {
    color: publicColor.agreeContent
  }
});

export default AgreePresenter;
