import React, { Component } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import TimepickerBtn from "../components/TimePicker";

class ModalPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true
    };
  }

  render() {
    const { modalVisible } = this.state;

    return (
      // <Modal
      //   animationType={"slide"}
      //   transparent={true}
      //   visible={modalVisible}
      //   onRequestClose={() => {
      //     console.log("Modal has been closed.");
      //   }}
      // >
      //   <TouchableOpacity
      //     onPress={() => {
      //       this.setState({
      //         modalVisible: !modalVisible
      //       });
      //     }}
      //   >
      //     <Text style={styles.text}>Close Modal</Text>
      //   </TouchableOpacity>
      //   <TimepickerBtn></TimepickerBtn>
      // </Modal>
      <View>
        <Text>Hello Alerm</Text>
      </View>
    );
  }
}
export default ModalPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#ede3f2"
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f7021a"
  },
  text: {
    color: "#3f2949"
  }
});
