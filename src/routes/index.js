import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { ChangeAccountStack } from "./ChangeAccountStack";
import { AppStack } from "./AppStack";

const Stack = createStackNavigator();

const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="auth" headerMode="none">
        <Stack.Screen name="auth" component={AuthStack} />
        <Stack.Screen name="newAccount" component={ChangeAccountStack} />
        <Stack.Screen name="main" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppRoute };
