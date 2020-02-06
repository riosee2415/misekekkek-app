import React, { Component } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

class ToggleButton extends Component {
  state = { switchValue: false };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  render() {
    return (
      <View>
        <View>
          <Text>{this.state.switchValue ? "Dark Mode" : "White Mode"}</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

export default ToggleButton;
