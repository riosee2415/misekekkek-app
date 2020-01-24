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
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { geoAddress } from "../../api/kakaoApi";
import { getLocation } from "../../api/weather";
import { firestore } from "../../firebase";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      depth1: null,
      depth2: null,
      depth3: null
    };
  }

  render() {
    const { depth1, depth2, depth3 } = this.state;
    return (
      <LinearGradient colors={["#246db6", "#ffffff"]} style={styles.container}>
        <Text>
          Main Screen{depth1} {depth2} {depth3}
        </Text>
        <TouchableOpacity
          onPressOut={() =>
            this.props.navigation.navigate({ routeName: "Settings" })
          }
        >
          <Text>Go Setting</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  componentDidMount = async () => {
    console.log("Mount test");

    await firestore
      .collection("exp_text")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data().output);
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Main;
