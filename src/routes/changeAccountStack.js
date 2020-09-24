import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChangeAccount, AddAccount } from "../screens";
import { AddAccountStack } from "./AddAccountStack";

const Stack = createStackNavigator();

const ChangeAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="changeAccount" headerMode="none">
      <Stack.Screen name="changeAccount" component={ChangeAccount} />
      <Stack.Screen name="addAccountStack" component={AddAccountStack} />
    </Stack.Navigator>
  );
};

export { ChangeAccountStack };
