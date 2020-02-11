import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import TimePicker from "react-native-simple-time-picker";

class TimePickerBtn extends Component {
  state = {
    selectedHours: 0,
    selectedMinutes: 0
  };
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          {selectedHours}hr:{selectedMinutes}min
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default TimePickerBtn;
