import React from "react";
import { View } from "react-native";
import {
  CustomButton,
  Spacer,
  SignupLayout,
  PINInput,
} from "../../../components";
import { styles } from "./styles";

const SecurityScreen = ({ navigation }) => {
  return (
    <SignupLayout>
      <View style={styles.body}>
        <Spacer>
          <PINInput light label="Create your PIN" />
        </Spacer>
        <Spacer />
        <CustomButton
          title="Continue"
          backgroundColor="#6dbd95"
          color="white"
          onPress={() => navigation.navigate("main")}
        />
      </View>
    </SignupLayout>
  );
};

export default SecurityScreen;
