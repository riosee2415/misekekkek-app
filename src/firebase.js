/**
 * FILENAME : firebase.js
 * DESCRIPTION : Connect firebase Database resource
 * CREATE DATE : 2020-01-03
 * CREATOR : YUN SANGHO
 *
 * UPDATE DATE : 2020-01-24
 * UPDATOR : YUN SANGHO
 * UPDATE DESCRIPTION : CONNECTION FIRESTORE
 *
 */

import firebase from "firebase/app";
import "firebase/firestore";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_DATABASEURL,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGING,
  FIREBASE_APPID,
  FIREBASE_MEASURE
} from "react-native-dotenv";

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGING,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASURE
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// TEMP - TEXT DATA
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
const mainText = {
  1: {
    val: "등급 - 1 입니다."
  },
  2: {
    val: "등급 - 2 입니다."
  },
  3: {
    val: "등급 - 3 입니다."
  },
  4: {
    val: "등급 - 4 입니다."
  },
  5: {
    val: "등급 - 5 입니다."
  },
  6: {
    val: "등급 - 6 입니다."
  },
  7: {
    val: "등급 - 7 입니다."
  }
};

export { mainText };
