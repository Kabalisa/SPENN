import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Image, Text, Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { CustomButton, AppHeader, UserInfo } from "../../../components";
import { styles } from "./styles/login";
import SpennIcon from "../../../../assets/spennIcon.png";

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = useState(true);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#3d5251" }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <AppHeader />
        <View style={styles.container}>
          <Image source={SpennIcon} style={styles.icon} resizeMode="contain" />
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>Welcome Back To</Text>
            <Text
              style={[styles.welcomeText, { marginLeft: 7, color: "#85e6b6" }]}
            >
              SPENN
            </Text>
          </View>
          <View style={styles.loginBody}>
            <UserInfo />
            <Input
              placeholder="PIN"
              placeholderTextColor="#b3bab5"
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              leftIcon={<Ionicons name="ios-lock" style={styles.inputIcon} />}
              label="Enter PIN"
              labelStyle={{ color: "#6dbd95" }}
              rightIcon={
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Ionicons
                    name={show ? "md-eye" : "md-eye-off"}
                    style={styles.inputIcon}
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
            <View style={styles.forgotContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("forgotPIN")}
              >
                <Text style={styles.forgotText}>forgot PIN?</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title="Log in"
              backgroundColor="#6dbd95"
              color="#ffffff"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
