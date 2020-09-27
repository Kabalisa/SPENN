import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { InAppHeader } from "../../components";
import { styles } from "./styles";

const MyMoneyScreen = () => {
  return (
    <>
      <InAppHeader title="My money" />
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
          My Money Screen
        </Text>
      </View>
    </>
  );
};

export default MyMoneyScreen;
