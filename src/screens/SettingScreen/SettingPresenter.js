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
            <ButtonText>테마 설정</ButtonText>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.switchValue}
            />
            <ButtonText>
              {this.state.switchValue ? "Dark Mode" : "White Mode"}
            </ButtonText>
          </Switchstyle>
          <Timestyle>
            <AlermButton onPress={() => this.TimePicker.open()}>
              <ButtonText>알림 설정</ButtonText>
            </AlermButton>
            <ButtonText>{this.state.time}</ButtonText>
          </Timestyle>
          <TimePicker
            ref={ref => {
              this.TimePicker = ref;
            }}
            onCancel={() => this.onCancel()}
            onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
          />
          <TouchableOpacity>
            <ButtonText>마케팅 동의</ButtonText>
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonText>이용정보 처리 방침</ButtonText>
          </TouchableOpacity>
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
    backgroundColor: publicColor.bgBlack
  }
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Switchstyle = styled.View`
  width: 90%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding-bottom: 10;
`;
const ButtonText = styled.Text`
  font-size: 16;
`;
const AlermButton = styled.TouchableOpacity`
  font-size: 18;
`;
const Timestyle = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-bottom: 10;
`;
