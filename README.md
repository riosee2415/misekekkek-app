# MISEKEKKEK - APP

fine dust information app. used react-native | firebase

## DevOps

- [x] react-native expo cli
- [x] babel-presets
- [x] eslint
- [x] git

## PACKAGE

- Navigation

  Try Install Package.

   <pre>
      npm install react-navigation
      npm install react-navigation-tabs
      npm install react-native-gesture-handler
      npm install react-native-reanimated
      npm install react-native-screens
      npm install react-navigation-stack
      npm install @react-native-safe-area-context
      npm install @react-native-community/masked-view
  </pre>

  - How to move ? -> Setting Screen that is name "Settings"

    ```js
    const Main = ({ navigation }) => {
        return (
                <TouchableOpacity onPressOut={() => navigation.navigate({ routeName: "Settings" })} >
                    <Text>Go Setting</Text>
                </TouchableOpacity
        );
    ```

## COOPERATOR

- riosee2415
- khj6407
- estimar2
- njm1128
- rlarudals
- pendato23
