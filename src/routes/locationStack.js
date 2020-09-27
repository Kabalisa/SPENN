import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LocationPartScreen,
  SignUpChooseCountry,
  ChooseCurrency,
} from "../screens";

const Stack = createStackNavigator();

const LocationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="locationPart"
      headerMode="none"
      mode="modal"
    >
      <Stack.Screen name="locationPart" component={LocationPartScreen} />
      <Stack.Screen
        name="signupchoosecountry"
        component={SignUpChooseCountry}
      />
      <Stack.Screen name="chooseCurrency" component={ChooseCurrency} />
    </Stack.Navigator>
  );
};

export { LocationStack };
