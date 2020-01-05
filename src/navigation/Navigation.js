/* UPDATE DATE : 2020-01-05
   UPDATOR : KIM KYOUNGMIN
   UPDATE DESCRIPTION : Tab-Navigation can enter setting screen */

import Main from "../screens/MainScreen";
import Setting from "../screens/SettingScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: Main, navigationOptions: { headerShown: false } },
    Settings: { screen: Setting }
  },
  {
    headerMode: "screen",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
