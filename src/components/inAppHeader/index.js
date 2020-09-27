import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text, Avatar } from "react-native-elements";
import { styles } from "./styles";

const InAppHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <Avatar
        size={40}
        rounded
        icon={{ name: "user-circle", type: "font-awesome", size: 40 }}
        containerStyle={styles.iconStyle}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default InAppHeader;
