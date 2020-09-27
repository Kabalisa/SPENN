import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChangeAccount } from "../screens";
import { AddAccountStack } from "./AddAccountStack";
import { CreateAccountStack } from "./CreateAccountStack";

const Stack = createStackNavigator();

const ChangeAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="changeAccount" headerMode="none">
      <Stack.Screen name="changeAccount" component={ChangeAccount} />
      <Stack.Screen name="addAccountStack" component={AddAccountStack} />
      <Stack.Screen name="createAccountStack" component={CreateAccountStack} />
    </Stack.Navigator>
  );
};

export { ChangeAccountStack };
