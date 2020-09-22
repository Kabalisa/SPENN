import React from "react";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { CustomButton, UserInfo } from "../../../components";
import { styles } from "./styles";
import SpennIcon from "../../../../assets/spennIcon.png";

const PopulatedLoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={SpennIcon} style={styles.icon} resizeMode="contain" />
      <View style={styles.middleContainer}>
        <UserInfo />
        <CustomButton
          title="Log in"
          backgroundColor="#6dbd95"
          color="#ffffff"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <CustomButton
          title="Change account"
          backgroundColor="#ffffff"
          color="#6dbd95"
        />
      </View>
      <View style={styles.poweredContainer}>
        <Text style={styles.poweredBy}>Powered by</Text>
        <View style={styles.bankNameContainer}>
          <Text style={styles.IandM}>I&M</Text>
          <Text style={styles.bank}>Bank</Text>
        </View>
      </View>
    </View>
  );
};

export default PopulatedLoginScreen;
