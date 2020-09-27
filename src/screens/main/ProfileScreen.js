import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { AppHeader } from "../../components";
import { styles } from "./styles";

const ProfileScreen = () => {
  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
          Profile Screen
        </Text>
      </View>
    </>
  );
};

export default ProfileScreen;
