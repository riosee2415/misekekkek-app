import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { getLocation } from "../api/weather";

class SetCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.setCover}>
        <View style={styles.gps}>
          <SimpleLineIcons name="location-pin" style={styles.loca} />

          <Text style={styles.locaText}>
            {this.props.depth1} {this.props.depth2} {this.props.depth3}
          </Text>
        </View>

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
    alignItems: "center",
    marginTop: -25
  },
  gps: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  loca: {
    fontSize: 26,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  locaText: {
    fontSize: 18
  },
  set: {
    fontSize: 30
  }
});

export default SetCover;
