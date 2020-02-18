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
          <Text style={styles.content}>
            이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며,
            ‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다.
            회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령
            및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.
            “개인정보처리방침”이란 이용자의 소중한 개인정보를 보호함으로써
            이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할
            지침을 의미합니다.
          </Text>
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
    color: publicColor.agreeContent,
    lineHeight: 20
  }
});

export default AgreePresenter;
