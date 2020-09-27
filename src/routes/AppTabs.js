import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import {
  TransfersScreen,
  MyMoneyScreen,
  MapScreen,
  InboxScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Transfers"
      tabBarOptions={{
        activeTintColor: "#069c51",
        inactiveTintColor: "#525F7F",
        labelStyle: { fontSize: 12 },
        tabStyle: { padding: 4 },
      }}
    >
      <Tab.Screen
        name="Transfers"
        component={TransfersScreen}
        options={{
          tabBarLabel: "Transfers",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="compare-arrows" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyMoney"
        component={MyMoneyScreen}
        options={{
          tabBarLabel: "My money",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="money-bill" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map-marker" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { AppTabs };
