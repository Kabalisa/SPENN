import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./styles";

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrowleft" type="antdesign" color="#85e6b6" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
