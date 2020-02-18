/*
   UPDATE DATE : 2020-01-05
   UPDATOR : KIM KYOUNGMIN
   UPDATE DESCRIPTION : Tab-Navigation can enter setting screen 
   *
   UPDATE DATE : 2020-02-12
   UPDATOR : KIM HANJU
   UPDATE DESCRIPTION : Alerm, Agree 
   */

import Main from "../screens/MainScreen";
import Setting from "../screens/SettingScreen";
import Alerm from "../screens/Alerm";
import Agree from "../screens/Agree";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main, navigationOptions: { headerShown: false } },
    Settings: {
      screen: Setting,
      navigationOptions: { headerTitle: false }
    },
    Alerm: {
      screen: Alerm,
      navigationOptions: ({ navigation }) => {
        headerShown: false;
      }
      //navigationOptions: { headerTitle: false }
    },
    Agree: { screen: Agree, navigationOptions: { headerTitle: false } }
  },
  {
    headerMode: "screen",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
