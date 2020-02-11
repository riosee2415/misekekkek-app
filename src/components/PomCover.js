import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

class PomCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.pomCover}>
        <Image
          source={require("../assets/pompom/7_Level_POMPOM_1000x1000.png")}
          style={styles.pom}
        />
        <Text style={styles.proGress}>ProgressBar</Text>

        <TouchableOpacity
          style={styles.more}
          onPressOut={() =>
            this.props.navigation.navigate({ routeName: "Settings" })
          }
        >
          <AntDesign name="plussquareo" style={styles.pluse} />
          <Text>더보기</Text>
        </TouchableOpacity>

        <View style={styles.conCover}>
          <Text>{this.props.output}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pomCover: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  pom: {
    width: 250,
    height: 250
  },
  proGress: {
    paddingTop: 10
  },
  more: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pluse: {
    fontSize: 12,
    marginRight: 5
  },
  conCover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PomCover;
