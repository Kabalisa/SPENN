import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { InAppHeader } from "../../components";
import { styles } from "./styles";

const InboxScreen = () => {
  return (
    <>
      <InAppHeader title="Inbox" />
      <View style={styles.container}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
          Inbox Screen
        </Text>
      </View>
    </>
  );
};

export default InboxScreen;
