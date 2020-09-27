import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { InAppHeader } from "../../components";
import { styles } from "./styles";

const MapScreen = () => {
  return (
    <>
      <InAppHeader title="Where can I use SPENN" />
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
          Map Screen
        </Text>
      </View>
    </>
  );
};

export default MapScreen;
