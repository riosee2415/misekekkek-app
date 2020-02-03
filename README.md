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

- Screen View

    <pre>
        npm install expo-linear-gradient
        npm i react-native-24h-timepicker --save
        npm install styled-components
    </pre>

* How to move ? -> Setting Screen that is name "Settings"

  ```js
  const Main = ({ navigation }) => {
      return (
              <TouchableOpacity onPressOut={() => navigation.navigate({ routeName: "Settings" })} >
                  <Text>Go Setting</Text>
              </TouchableOpacity
      );
  ```

## FIREBASE USAGE

```js
import { firestore } from "src/firebase";

 async () => {

     await firestore
      .collection( [Collection Name]\)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data().output);
        });
      });
 }

```

<pre>
    - collection : "exp_text"
        -- docs : lv        [matching for finedust level]
        -- docs : output    [that expression to text weather same level]
</pre>

## WORK-LIST

- [x] Git Repository Interwork.
- [x] Firebase Connnection.
- [x] Navigator Settings.
- [x] GET Weather API Meterials.
- [x] GET Fine Dust API Meterials.
- [ ] Create Logo.
- [ ] Init Screen Front.
- [ ] Main Screen Front.
- [ ] Settings Screen Front.
- [ ] Create Redux.
- [ ] Connect Reducer.
- [x] KaKaoTalk Interwork.
- [x] Device Permmision for Push Alarm When User Want Time.
- [ ] Deploy App.

## COOPERATOR

- riosee2415
- khj6407
- estimar2
- njm1128
- rlarudals
- pendato23
