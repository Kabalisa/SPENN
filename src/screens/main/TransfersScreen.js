import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { InAppHeader } from "../../components";
import { styles } from "./styles";

const TransfersScreen = () => {
  return (
    <>
      <InAppHeader title="Transfers" />
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
          Transfers Screen
        </Text>
      </View>
    </>
  );
};

export default TransfersScreen;
