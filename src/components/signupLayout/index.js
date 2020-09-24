import React from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";
import AppHeader from "../appHeader/AppHeader";
import SignupProgress from "../singupProgress";
import Spacer from "../spacer";
import { styles } from "./styles";
import SpennIcon from "../../../assets/spennIcon.png";

const SignupLayout = ({ children, clear, clearSignup }) => {
  return (
    <>
      <AppHeader clear={clear} clearSignup={clearSignup} />
      <View style={styles.container}>
        <Image
          source={SpennIcon}
          style={styles.smallIcon}
          resizeMode="contain"
        />
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Sign up To</Text>
          <Text
            style={[styles.welcomeText, { marginLeft: 7, color: "#85e6b6" }]}
          >
            SPENN
          </Text>
        </View>
        <Spacer />
        <SignupProgress />
        {children}
      </View>
    </>
  );
};

export default SignupLayout;
