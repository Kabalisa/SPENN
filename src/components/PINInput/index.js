import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

const PINInput = ({ light, label }) => {
  const [show, setShow] = useState(true);

  return (
    <Input
      placeholder="PIN"
      placeholderTextColor={light ? "#929c95" : "#b3bab5"}
      containerStyle={styles.inputContainer}
      inputContainerStyle={[
        styles.inputContainerStyle,
        light ? { color: "#339162" } : { color: "#6dbd95" },
      ]}
      inputStyle={[
        styles.inputStyle,
        light ? { color: "#339162" } : { color: "#6dbd95" },
      ]}
      leftIcon={
        <Ionicons
          name="ios-lock"
          style={[
            styles.inputIcon,
            light ? { color: "#141313" } : { color: "white" },
          ]}
        />
      }
      label={label}
      labelStyle={light ? { color: "#339162" } : { color: "#6dbd95" }}
      rightIcon={
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Ionicons
            name={show ? "md-eye" : "md-eye-off"}
            style={[
              styles.inputIcon,
              light ? { color: "#141313" } : { color: "white" },
            ]}
          />
        </TouchableOpacity>
      }
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={show}
      keyboardType="numbers-and-punctuation"
      textContentType="oneTimeCode"
      keyboardAppearance="dark"
      selectionColor="#85e6b6"
    />
  );
};

export default PINInput;
