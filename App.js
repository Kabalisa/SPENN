import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRoute } from "./src/routes";
import { View, YellowBox } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <AppRoute />
        <StatusBar style="light" />
      </View>
    </PaperProvider>
  );
}
