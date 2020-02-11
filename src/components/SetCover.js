import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { getLocation } from "../api/weather";

class SetCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.setCover}>
        <MaterialIcons name="location-on" style={styles.loca}>
          <Text style={styles.locaText}>
            {this.props.depth1} {this.props.depth2} {this.props.depth3}
          </Text>
        </MaterialIcons>

        <TouchableOpacity
          onPressOut={() => this.props.navi.navigate({ routeName: "Settings" })}
        >
          <AntDesign name="setting" style={styles.set} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setCover: {
    width: "90%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 50
  },
  loca: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  locaText: {
    fontSize: 15
  },
  set: {
    fontSize: 25
  }
});

export default SetCover;
