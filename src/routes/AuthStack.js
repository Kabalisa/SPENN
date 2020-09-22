import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PopulatedLoginScreen, LoginScreen } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="populatedLogin" headerMode="none">
      <Stack.Screen name="populatedLogin" component={PopulatedLoginScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export { AuthStack };
