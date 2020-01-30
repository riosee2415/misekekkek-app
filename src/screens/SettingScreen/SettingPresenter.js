/* UPDATE DATE : 2020-01-05
   UPDATOR : KIM KYOUNGMIN
   UPDATE DESCRIPTION : Tab-Navigation can enter setting screen */

/* UPDATE DATE : 2020-01-30
   UPDATOR : KIM HANJU
   UPDATE DESCRIPTION : Dark & White Mode Switch*/
import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  state = { switchValue: false };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <Switch
            style={{ marginTop: 10 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
          <Text>{this.state.switchValue ? "Dark Mode" : "White Mode"}</Text>
        </View>
        <View style={styles.content}>
          <Text>Setting Screen</Text>
          <Text>Set time at Push Alerm</Text>
          <Text>Used to any rule</Text>
          <Text>Marketing toggle key(on,off)</Text>
        </View>
      </View>
    );
  }
}
// const Button = styled.button`
//   display:block;
//   float:right;
//   margin-right:10px;
// `;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  switch: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
  }
});
