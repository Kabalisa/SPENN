import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Image, Input } from "react-native-elements";
import {
  CustomButton,
  AppHeader,
  ChooseCountry,
  Spacer,
} from "../../../components";
import { Feather } from "@expo/vector-icons";
import { Context as CountryContext } from "../../../context/CountryContext";
import { styles } from "./styles";
import SpennIcon from "../../../../assets/spennIcon.png";

const AddAccount = ({ navigation }) => {
  const { state } = useContext(CountryContext);

  return (
    <>
      <AppHeader />
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
        <View style={styles.phoneInput}>
          <Feather name="phone" style={styles.phoneIcon} />
          <Input
            placeholder="+"
            defaultValue={
              state.choosenCountry ? state.choosenCountry.code : null
            }
            placeholderTextColor="#b3bab5"
            disabled={true}
            containerStyle={styles.codeInput}
            inputStyle={styles.inputStyle}
          />
          <Input
            placeholder="add phone"
            placeholderTextColor="#b3bab5"
            containerStyle={styles.numberInput}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            disabled={state.choosenCountry ? false : true}
            keyboardType="numbers-and-punctuation"
            keyboardAppearance="dark"
            selectionColor="#85e6b6"
          />
        </View>
        <Spacer />
        <CustomButton
          title="Log in"
          backgroundColor="#6dbd95"
          color="#ffffff"
        />
      </View>
    </>
  );
};

export default AddAccount;