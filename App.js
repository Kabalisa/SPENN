import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { AppRoute } from "./src/routes";
import { View, YellowBox } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppRoute />
      <StatusBar style="light" />
    </View>
  );
}
