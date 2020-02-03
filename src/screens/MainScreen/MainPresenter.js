/**
 * FILENAME : weather.js
 * DESCRIPTION : Tab-Navigation can enter setting screen
 * CREATE DATE : 2020-01-05
 * CREATOR : KIM KYOUNGMIN
 *
 * UPDATE DATE : 2020-01-12
 * UPDATOR : YUN SANGHO
 * UPDATE DESCRIPTION : Chageed func => Class Compoenent && Include Current Location Name for Korean
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { geoAddress } from "../../api/kakaoApi";
import { getLocation } from "../../api/weather";
import { firestore } from "../../firebase";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      depth1: null,
      depth2: null,
      depth3: null,
      output: null
    };
  }

  render() {
    const { depth1, depth2, depth3, output } = this.state;
    return (
      <ImageBackground
        source={require("./src/iPhone_Xr/7_Level_iPhone_Xr.jpg")}
        style={styles.container}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={styles.setCover}>
          <MaterialIcons name="location-on" style={styles.loca}>
            <Text>
              {depth1} {depth2} {depth3}
            </Text>
          </MaterialIcons>

          <TouchableOpacity
            onPressOut={() =>
              this.props.navigation.navigate({ routeName: "Settings" })
            }
          >
            <AntDesign name="setting" style={styles.set} />
          </TouchableOpacity>
        </View>

        <View style={styles.pomCover}>
          <Image
            source={require("./src/pompom/POMPOM_W.png")}
            style={styles.pom}
          />
          <Text style={styles.proGress}>ProgressBar</Text>

          <TouchableOpacity
            style={styles.more}
            onPressOut={() =>
              this.props.navigation.navigate({ routeName: "Settings" })
            }
          >
            <AntDesign name="setting" style={styles.set} />
          </TouchableOpacity>

          <View style={styles.conCover}>
            <Text>{output}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  componentDidMount = async () => {
    console.log("Mount test");

    await firestore
      .collection("exp_text")
      .where("lv", "==", "1")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data().output);

          this.setState({
            output: doc.data().output
          });
        });
      });

    const coords = await getLocation();

    let geo = null;
    try {
      geo = await geoAddress(coords.longitude, coords.latitude);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        depth1: geo.region_1depth_name,
        depth2: geo.region_2depth_name,
        depth3: geo.region_3depth_name
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover"
  },
  setCover: {
    width: "90%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20
  },
  loca: {
    fontSize: 15
  },
  set: {
    fontSize: 25
  },
  pomCover: {
    flex: 8,
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
    paddingTop: 10
  },
  conCover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Main;
