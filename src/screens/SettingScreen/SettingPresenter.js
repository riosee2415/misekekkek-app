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
import TimePicker from "react-native-24h-timepicker";
import { AsyncStorage } from "../../middleware/middleware";
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
      time: "",
      theme: "white"
    };
  }
  state = { switchValue: false };
  toggleSwitch = async value => {
    this.setState({ switchValue: value });
    AsyncStorage.setItem("theme", value + "", null);

    const currentTheme = await AsyncStorage.getItem("theme");

    currentTheme === "true"
      ? this.setState({
          theme: "black"
        })
      : this.setState({
          theme: "white"
        });
  };

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  render() {
    const { theme } = this.state;
    return (
      <View style={theme === "white" ? styles.themeWhite : styles.themeBlack}>
        <Content>
          <Switchstyle>
            <ButtonText>
              <MaterialCommunityIcons
                style={styles.icon}
                name="theme-light-dark"
              />
              &nbsp;테마 설정
            </ButtonText>
            <AlermButton onPress={() => this.TimePicker.open()}>
              <ButtonText>
                <AntDesign style={styles.icon} name="clockcircle" />
                &nbsp;알림 설정
              </ButtonText>
            </AlermButton>
            <ButtonText>마케팅 동의</ButtonText>

            <ButtonText>이용정보 처리 방침</ButtonText>
          </Switchstyle>
          <Timestyle>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.switchValue}
            />
            <ButtonText>{this.state.time}</ButtonText>
            <TouchableOpacity>
              <AntDesign style={styles.icon} name="right" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign style={styles.icon} name="right" />
            </TouchableOpacity>
          </Timestyle>
          <TimePicker
            ref={ref => {
              this.TimePicker = ref;
            }}
            onCancel={() => this.onCancel()}
            onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
          />
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-evenly;
  flex-direction: row;
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
