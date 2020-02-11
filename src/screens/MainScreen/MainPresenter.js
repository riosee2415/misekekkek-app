/**
 * FILENAME : weather.js
 * DESCRIPTION : Tab-Navigation can enter setting screen
 * CREATE DATE : 2020-01-05
 * CREATOR : KIM KYOUNGMIN
 *
 * UPDATE DATE : 2020-01-12
 * UPDATOR : YUN SANGHO
 * UPDATE DESCRIPTION : Chageed func => Class Compoenent && Include Current Location Name for Korean
 *
 * UPDATE DATE : 2020-01-29
 * UPDATOR : SONG SEONGMIN
 * UPDATE DESCRIPTION : Add ImageBackground
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
import SetCover from "../../components/SetCover";
import PomCover from "../../components/PomCover";
import styled from "styled-components";

//import { firestore } from "../../firebase";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      depth1: null,
      depth2: null,
      depth3: null,
      output: null,
      level: 1,
      bgPath: "../../assets/iPhone_Xr/1_Level_iPhone_Xr.jpg"
    };
  }

  render() {
    const { depth1, depth2, depth3, output, level, bgPath } = this.state;

    return (
      <View style={styles.container}>
        {level === 1 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/1_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}

        {level === 2 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/2_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}

        {level === 3 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/3_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}

        {level === 4 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/4_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}

        {level === 5 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/5_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}

        {level === 6 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/6_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}

        {level === 7 ? (
          <ImageBackground
            style={styles.container}
            source={require("../../assets/iPhone_Xr/7_Level_iPhone_Xr.jpg")}
          >
            <StatusBar barStyle={"dark-content"} />
            <SetCover
              depth1={depth1}
              depth2={depth2}
              depth3={depth3}
              navi={this.props.navigation}
            />
            <PomCover output={output} />
          </ImageBackground>
        ) : null}
      </View>
    );
  }

  componentDidMount = async () => {
    console.log("Mount test");

    const { level, bgPath } = this.state;

    if (level === 1) {
      bgPath = "../../assets/iPhone_Xr/1_Level_iPhone_Xr.jpg";
    } else if (level === 2) {
      bgPath = "../../assets/iPhone_Xr/2_Level_iPhone_Xr.jpg";
    } else {
      bgPath = "../../assets/iPhone_Xr/7_Level_iPhone_Xr.jpg";
    }

    // await firestore
    //   .collection("exp_text")
    //   .where("lv", "==", "2")
    //   .get()
    //   .then(docs => {
    //     docs.forEach(doc => {
    //       console.log(doc.id);
    //       console.log(doc.data().output);

    //       this.setState({
    //         output: doc.data().output
    //       });
    //     });
    //   });

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
} // -- class end

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
  },
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

export default Main;
