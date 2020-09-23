import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChangeAccount } from "../screens";

const Stack = createStackNavigator();

const ChangeAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="changeAccount" headerMode="none">
      <Stack.Screen name="changeAccount" component={ChangeAccount} />
    </Stack.Navigator>
  );
};

export { ChangeAccountStack };
