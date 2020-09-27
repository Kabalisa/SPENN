import React from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";
import {
  CustomButton,
  AppHeader,
  ChooseCountry,
  Spacer,
  PhoneInput,
} from "../../../components";
import { styles } from "./styles";
import SpennIcon from "../../../../assets/spennIcon.png";

const AddAccount = ({ navigation }) => {
  return (
    <>
      <AppHeader clear />
      <View style={styles.loginContainer}>
        <Image
          source={SpennIcon}
          style={styles.smallIcon}
          resizeMode="contain"
        />
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Sign in To</Text>
          <Text
            style={[styles.welcomeText, { marginLeft: 7, color: "#85e6b6" }]}
          >
            SPENN
          </Text>
        </View>
        <Spacer />
        <Spacer />
        <View style={styles.addCountry}>
          <ChooseCountry onPress={() => navigation.navigate("chooseCountry")} />
        </View>
        <PhoneInput />
        <Spacer />
        <CustomButton
          title="Log in"
          backgroundColor="#6dbd95"
          color="#ffffff"
          onPress={() => navigation.navigate("main")}
        />
      </View>
    </>
  );
};

export default AddAccount;
