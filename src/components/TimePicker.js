import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Switch } from "react-native";
import TimePicker from "react-native-24h-timepicker";

class TimePickerBtn extends Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.TimePicker.open()}>
          <Text>TIMEPICKER</Text>
        </TouchableOpacity>
        <Text>{this.state.time}</Text>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100
  },
  text: {
    fontSize: 20,
    marginTop: 10
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});

export default TimePickerBtn;
