import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PopulatedLoginScreen, LoginScreen, ForgotPIN } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="populatedLogin" headerMode="none">
      <Stack.Screen name="populatedLogin" component={PopulatedLoginScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="forgotPIN" component={ForgotPIN} />
    </Stack.Navigator>
  );
};

export { AuthStack };
