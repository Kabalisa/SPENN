import React from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";
import { CustomButton } from "../../../components";
import { styles } from "./styles";
import SpennIcon from "../../../../assets/spennIcon.png";

const ChangeAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <Text style={styles.rowOneText}>
          Create your FREE account and wave goodbye to transaction fees
        </Text>
      </View>
      <View style={styles.rowTwo}>
        <Image source={SpennIcon} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={styles.rowThree}>
        <CustomButton
          title="Log in"
          backgroundColor="#ffffff"
          color="#6dbd95"
          small
        />
        <CustomButton
          title="Sign up"
          backgroundColor="#6dbd95"
          color="#ffffff"
          small
        />
      </View>
    </View>
  );
};

export default ChangeAccount;
