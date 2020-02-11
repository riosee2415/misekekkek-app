/**
 * UPDATE DATE : 2020-01-05
 * UPDATOR : KIM KYOUNGMIN
 * UPDATE DESCRIPTION : Tab-Navigation can enter setting screen
 *
 * UPDATE DATE : 2020-01-30
 * UPDATOR : KIM HANJU
 * UPDATE DESCRIPTION : Dark & White Mode Switch
 *
 * UPDATE DATE : 2020-02-03
 * UPDATOR : KIM HANJU
 * UPDATE DESCRIPTION : Time Picker
 */
import React from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { AsyncStorage } from "../../middleware/middleware";
import SettingMenu from "../../components/SettingMenu";
import ToggleButton from "../../components/ToggleButton";
import TimePickerBtn from "../../components/TimePicker";
import ModalPresenter from "../../modal/ModalPresenter";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { publicColor } from "../../middleware/publicColor";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true
    };
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <SettingMenu
            set={"alerm"}
            val={
              modalVisible ? (
                <ModalPresenter navi={this.props.navigation} />
              ) : null
            }
            alerm={true}
            navi={this.props.navigation}
          />

          <SettingMenu set={"Config"} val={">"} alerm={false} />
          <SettingMenu set={"High"} val={">"} alerm={false} />
        </Content>
      </View>
    );
  }
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
