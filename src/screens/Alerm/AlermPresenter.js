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

        <TouchableOpacity onPress={() => this._handleTime()}>
          <Text> SAVE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AlermPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#ede3f2"
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f7021a"
  },
  text: {
    color: "#3f2949"
  }
});
