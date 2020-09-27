import React, { useContext } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { Context as CountryContext } from "../../context/CountryContext";
import { Context as SignupContext } from "../../context/SignupContext";
import { styles } from "./styles";

const PhoneInput = ({ signup, light, setPhoneNumber }) => {
  const { state } = useContext(CountryContext);
  const { state: signupState } = useContext(SignupContext);

  const defaultValue = state.choosenCountry ? state.choosenCountry.code : null;

  const disabled =
    signup && state.choosenCountry
      ? false
      : state.choosenCountry
      ? false
      : true;

  return (
    <View style={styles.phoneInput}>
      <Feather
        name="phone"
        style={[
          styles.phoneIcon,
          light ? { color: "#71c99d" } : { color: "#85e6b6" },
        ]}
      />
      <Input
        placeholder="+"
        defaultValue={defaultValue}
        placeholderTextColor={light ? "#3d5251" : "#b3bab5"}
        disabled={true}
        containerStyle={styles.codeInput}
        inputStyle={light ? { color: "#3d5251" } : styles.inputStyle}
      />
      <Input
        placeholder="add phone"
        placeholderTextColor={light ? "#3d5251" : "#b3bab5"}
        containerStyle={styles.numberInput}
        inputStyle={light ? { color: "#3d5251" } : styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        disabled={disabled}
        keyboardType="numbers-and-punctuation"
        keyboardAppearance="dark"
        selectionColor="#85e6b6"
        onChangeText={signup ? (value) => setPhoneNumber(value) : () => null}
      />
    </View>
  );
};

export default PhoneInput;
