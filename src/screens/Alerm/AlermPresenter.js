/* CREATE DATE : 2020-02-11
   UPDATOR : KIM HANJU
   UPDATE DESCRIPTION : Alerm Screen */

import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import TimePicker from "react-native-simple-time-picker";
import { AsyncStorage } from "../../middleware/middleware";
import { LinearGradient } from "expo-linear-gradient";
import publicColor from "../../middleware/publicColor";

class AlermPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHours: 0,
      selectedMinutes: 0
    };
  }

  _handleTime = async () => {
    await AsyncStorage.removeItem("hour");
    await AsyncStorage.removeItem("min");

    const { selectedHours, selectedMinutes } = this.state;

    await AsyncStorage.setItem("hour", JSON.stringify(selectedHours));
    await AsyncStorage.setItem("min", JSON.stringify(selectedMinutes));
  };

  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <LinearGradient colors={["#fffdf2", "#ffffff"]} style={styles.container}>
        <Text style={styles.text}>
          시간 선택시 해당 시간에 미세먼지 정보를 받아볼 수 있습니다.
        </Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) =>
            this.setState({
              selectedHours: hours,
              selectedMinutes: minutes
            })
          }
        />
        <View style={styles.savecontainer}>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => this._handleTime()}
          >
            <Text style={styles.saveText}> 저장 </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export default AlermPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fffdcd"
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f7021a"
  },
  text: {
    marginTop: 40,
    marginBottom: 50,
    color: "#666666"
  },
  saveBtn: {
    padding: 10,
    backgroundColor: "#fffdf2",
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#efdf8f",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.55,
    shadowRadius: 7.84,
    elevation: 6,
    position: "absolute"
  },
  saveText: {
    color: "#0b0b0b"
  },
  savecontainer: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#0d0d0d",
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#ffffff",
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 7.84,
    elevation: 6,
    position: "relative"
  }
});
