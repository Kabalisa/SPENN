import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NamesPartScreen, NamesScreen } from "../screens";

const Stack = createStackNavigator();

const NamesStack = () => {
  return (
    <Stack.Navigator initialRouteName="namePart" headerMode="none" mode="modal">
      <Stack.Screen name="namePart" component={NamesPartScreen} />
      <Stack.Screen name="namesScreen" component={NamesScreen} />
    </Stack.Navigator>
  );
};

export { NamesStack };
