/* CREATE DATE : 2020-02-11
   UPDATOR : KIM HANJU
   UPDATE DESCRIPTION : Alerm Screen */

import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import TimePicker from "react-native-simple-time-picker";
import { AsyncStorage } from "../../middleware/middleware";

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
      <View style={styles.container}>
        <Text style={styles.text}>원하는 시간을 선택해 주세요.</Text>
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

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => this._handleTime()}
        >
          <Text> 저장 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AlermPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ede3f2"
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f7021a"
  },
  text: {
    marginTop: 20,
    color: "#666666"
  },
  saveBtn: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#ffb8b8"
  }
});
