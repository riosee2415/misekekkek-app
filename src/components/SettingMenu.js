import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

class SettingMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.box}>
        <Text>{this.props.set}</Text>
        <Text>{this.props.val}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

export default SettingMenu;
