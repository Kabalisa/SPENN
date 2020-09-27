import React from "react";
import { useWindowDimensions, View, StyleSheet } from "react-native";
import { Title, Divider } from "react-native-paper";
import { Avatar } from "react-native-elements";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { AppTabs } from "./AppTabs";
import { ProfileScreen } from "../screens";

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <Avatar
            size={80}
            rounded
            icon={{ name: "user-circle", type: "font-awesome", size: 80 }}
            containerStyle={{ backgroundColor: "#3d5251" }}
            onPress={() => navigation.openDrawer()}
          />
          <View style={styles.nameRole}>
            <Title style={styles.title}>Innocent Fiston</Title>
          </View>
        </View>
        <Divider style={{ marginTop: hp("5%") }} />
        <DrawerItemList {...props} />
        <Divider />
        <DrawerItem
          label="sign-out"
          onPress={() =>
            navigation.navigate("auth", { screen: "populatedLogin" })
          }
          icon={() => <AntDesign name="logout" size={24} color="#e21b1c" />}
          style={{
            marginTop: hp("45%"),
            flex: 1,
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
      initialRouteName="marketPlace"
      drawerPosition="right"
      drawerContentOptions={{
        activeBackgroundColor: "transparent",
        activeTintColor: "#069c51",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={AppTabs}
        options={{
          drawerIcon: ({ color }) => {
            return <FontAwesome name="home" size={24} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => {
            return <FontAwesome name="user" size={24} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "column",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp("20%"),
  },
  nameRole: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  editProfileView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: hp("1%"),
  },
  title: {
    fontSize: 18,
  },
  caption: {
    fontSize: 14,
  },
});
