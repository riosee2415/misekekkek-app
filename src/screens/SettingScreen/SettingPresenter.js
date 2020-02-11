/**
 * UPDATE DATE : 2020-01-05
 * UPDATOR : KIM KYOUNGMIN
 * UPDATE DESCRIPTION : Tab-Navigation can enter setting screen
 *
 * UPDATE DATE : 2020-02-11
 * UPDATOR : KIM HANJU
 * UPDATE DESCRIPTION : Alerm
 */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { AsyncStorage } from "../../middleware/middleware";
import SettingMenu from "../../components/SettingMenu";
// import ToggleButton from "../../components/ToggleButton";
import AlermPresenter from "../Alerm/AlermPresenter";
import { AntDesign } from "@expo/vector-icons";
import { publicColor } from "../../middleware/publicColor";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: 0,
      min: 0
    };
  }

  render() {
    const { hour, min } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <SettingMenu
            set={"알람 설정"}
            val={
              (hour === null ? "00" : hour < 10 ? "0" + hour : hour) +
              " : " +
              (min === null ? "00" : min < 10 ? "0" + min : min)
            }
            alerm={true}
            navi={this.props.navigation}
          />

          <SettingMenu
            set={"이용 정보 처리 방침"}
            val={<AntDesign name="right" style={{ fontSize: 15 }} />}
            alerm={false}
          />
          <SettingMenu
            set={"일반 설정"}
            val={<AntDesign name="right" style={{ fontSize: 15 }} />}
            alerm={false}
          />
        </Content>
      </View>
    );
  }

  shouldComponentUpdate = () => {
    this._initTimeValue();
    return true;
  };

  componentDidMount = () => {
    this._initTimeValue();
  };

  _initTimeValue = async () => {
    const hourData = await AsyncStorage.getItem("hour");
    const minData = await AsyncStorage.getItem("min");

    this.setState({
      hour: hourData,
      min: minData
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  themeWhite: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: publicColor.bgWhite
  },
  themeBlack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: publicColor.bgBlack,
    color: publicColor.bgWhite
  },
  icon: {
    fontSize: 18,
    padding: 10
  }
});

const Content = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
const Switchstyle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  padding: 10px;
`;
const AlermButton = styled.TouchableOpacity`
  font-size: 18px;
`;
const Timestyle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
