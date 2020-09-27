import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as CountryProvider } from "./src/context/CountryContext";
import { Provider as SignupProvider } from "./src/context/SignupContext";
import { AppRoute } from "./src/routes";
import { View } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <SignupProvider>
        <CountryProvider>
          <View style={{ flex: 1 }}>
            <AppRoute />
            <StatusBar style="light" />
          </View>
        </CountryProvider>
      </SignupProvider>
    </PaperProvider>
  );
}
