/* CREATE DATE : 2020-02-11
   UPDATOR : KIM HANJU
   UPDATE DESCRIPTION : Alerm Screen */

import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import TimePicker from "react-native-simple-time-picker";
import { AsyncStorage } from "../../middleware/middleware";
import { LinearGradient } from "expo-linear-gradient";
import { publicColor } from "../../middleware/publicColor";
import { NavigationAction } from "react-navigation";

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

    this.props.navigation.navigate("Settings");
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
            onPressOut={() => this._handleTime()}
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
    backgroundColor: publicColor.alermContainer
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: publicColor.modal
  },
  text: {
    marginTop: 40,
    marginBottom: 50,
    color: publicColor.gray
  },
  saveBtn: {
    padding: 10,
    backgroundColor: publicColor.savaBtn,
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: publicColor.saveBtnShdow,
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
    color: publicColor.bgBlack
  },
  savecontainer: {
    marginTop: 50,
    padding: 10,
    backgroundColor: publicColor.bgBlack,
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: publicColor.bgWhite,
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
