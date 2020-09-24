import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LocationStack } from "./locationStack";
import { NamesStack } from "./namesStack";
import { SecurityScreen } from "../screens";

const Stack = createStackNavigator();

const CreateAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="locationStack" headerMode="none">
      <Stack.Screen name="locationStack" component={LocationStack} />
      <Stack.Screen name="namesStack" component={NamesStack} />
      <Stack.Screen name="securityScreen" component={SecurityScreen} />
    </Stack.Navigator>
  );
};

export { CreateAccountStack };
