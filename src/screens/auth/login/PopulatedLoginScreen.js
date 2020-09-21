import React from "react";
import { View } from "react-native";
import { Image, Avatar, Text } from "react-native-elements";
import { CustomButton } from "../../../components";
import { styles } from "./styles";
import SpennIcon from "../../../../assets/spennIcon.png";

const PopulatedLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={SpennIcon} style={styles.icon} resizeMode="contain" />
      <View style={styles.middleContainer}>
        <Avatar
          size={65}
          rounded
          icon={{ name: "user-circle", type: "font-awesome", size: 65 }}
          containerStyle={styles.avatar}
        />
        <Text style={styles.nameText}>Innocent Fiston Kabalisa</Text>
        <Text style={styles.phoneNumber}>+250785382213</Text>

        <CustomButton
          title="Log in"
          backgroundColor="#6dbd95"
          color="#ffffff"
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
