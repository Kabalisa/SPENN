import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChangeAccount, AddAccount, ChooseCountry } from "../screens";

const Stack = createStackNavigator();

const AddAccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="addAccount"
      headerMode="none"
      mode="modal"
    >
      <Stack.Screen name="addAccount" component={AddAccount} />
      <Stack.Screen name="chooseCountry" component={ChooseCountry} />
    </Stack.Navigator>
  );
};

export { AddAccountStack };
