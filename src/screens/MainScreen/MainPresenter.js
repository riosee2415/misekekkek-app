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
 *
 * UPDATE DATE : 2020-02-12
 * UPDATOR : LEE DONGUK
 * UPDATE DESCRIPTION : Add Progressbar
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
import { AntDesign } from "@expo/vector-icons";
import { geoAddress } from "../../api/kakaoApi";
import { getLocation } from "../../api/weather";
import SetCover from "../../components/SetCover";
import { Rank } from "../../middleware/middleware";
import { mainText } from "../../firebase";

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

            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/1_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/1_Level.png")}
                  style={styles.proGress}
                />
                <Text>1등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[1].val}</Text>
              </View>
            </View>
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

            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/2_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/2_Level.png")}
                  style={styles.proGress}
                />
                <Text>2등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[2].val}</Text>
              </View>
            </View>
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

            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/3_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/3_Level.png")}
                  style={styles.proGress}
                />
                <Text>3등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[3].val}</Text>
              </View>
            </View>
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

            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/4_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/4_Level.png")}
                  style={styles.proGress}
                />
                <Text>4등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[4].val}</Text>
              </View>
            </View>
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

            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/5_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/5_Level.png")}
                  style={styles.proGress}
                />
                <Text>5등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[5].val}</Text>
              </View>
            </View>
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
            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/6_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/6_Level.png")}
                  style={styles.proGress}
                />
                <Text>6등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[6].val}</Text>
              </View>
            </View>
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
            <View style={styles.pomCover}>
              <Image
                source={require("../../assets/pompom/7_LEVEL_POM.png")}
                style={styles.pom}
              />

              <TouchableOpacity
                style={styles.more}
                // onPressOut={() =>
                //   this.props.navigation.navigate({ routeName: "More" })
                // }
              >
                <Image
                  source={require("../../assets/progressbar/7_Level.png")}
                  style={styles.proGress}
                />
                <Text>7등급 - 수치값</Text>
              </TouchableOpacity>

              <View style={styles.conCover}>
                <Text>{mainText[7].val}</Text>
              </View>
            </View>
          </ImageBackground>
        ) : null}
      </View>
    );
  }

  componentDidMount = async () => {
    console.log("Mount test");

    this.setState({
      level: await Rank.getRankByPm10()
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
  pomCover: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  pom: {
    width: 230,
    height: 230,
    marginBottom: 30
  },
  proGress: {
    marginBottom: 15,
    width: 300,
    height: 30
  },
  more: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  // pluse: {
  //   fontSize: 12,
  //   marginBottom: 10
  // },
  conCover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Main;
