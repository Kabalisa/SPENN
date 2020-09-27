import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export { AppStack };
