import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PopulatedLoginScreen } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="populatedLogin" component={PopulatedLoginScreen} />
    </Stack.Navigator>
  );
};

export { AuthStack };
