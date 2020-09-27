import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "./styles";

const NameInput = ({ label, placeholder, type, handleSetName }) => {
  return (
    <View>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#929c95"
        label={label}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={{ color: "#141313" }}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardAppearance="dark"
        selectionColor="#85e6b6"
        onChangeText={(value) => handleSetName(type, value)}
      />
    </View>
  );
};

export default NameInput;
