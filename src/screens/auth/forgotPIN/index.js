import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { AppHeader, CustomButton, ImageModal } from "../../../components";
import { styles } from "./styles";
import SpennIcon from "../../../../assets/spennIcon.png";

const ForgotPIN = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Image source={SpennIcon} style={styles.icon} resizeMode="contain" />
        <View style={styles.forgotBody}>
          <View style={styles.titleContainer}>
            <Ionicons name="ios-lock" style={styles.lockIcon} />
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>
                Enter your SPENN Security Code to recover your account
              </Text>
            </View>
          </View>
          <View style={styles.changePin}>
            <Input
              placeholder="Security Code"
              placeholderTextColor="#b3bab5"
              label="Enter Security Code"
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              labelStyle={{ color: "#6dbd95" }}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="oneTimeCode"
              keyboardAppearance="dark"
              selectionColor="#85e6b6"
            />
            <View style={styles.forgotContainer}>
              <TouchableOpacity onPress={handleToggleModal}>
                <Text style={styles.forgotText}>forgot security code?</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title="Continue"
              backgroundColor="#6dbd95"
              color="#ffffff"
            />
          </View>
          <ImageModal
            toggleModal={toggleModal}
            handleToggleModal={handleToggleModal}
          />
        </View>
      </View>
    </>
  );
};

export default ForgotPIN;
