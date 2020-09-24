import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as CountryProvider } from "./src/context/CountryContext";
import { AppRoute } from "./src/routes";
import { View, YellowBox } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <CountryProvider>
        <View style={{ flex: 1 }}>
          <AppRoute />
          <StatusBar style="light" />
        </View>
      </CountryProvider>
    </PaperProvider>
  );
}
