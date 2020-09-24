import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Context as CountryContext } from "../../context/CountryContext";
import { Context as SignupContext } from "../../context/SignupContext";
import { styles } from "./styles";

const AppHeader = ({ clear, clearSignup }) => {
  const { resetState } = useContext(CountryContext);
  const { resetSignupState } = useContext(SignupContext);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => {
          clear && resetState();
          clearSignup && resetSignupState();
          navigation.goBack();
        }}
      >
        <Icon name="arrowleft" type="antdesign" color="#85e6b6" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
