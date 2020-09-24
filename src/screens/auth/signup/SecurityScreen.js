import React from "react";
import { View } from "react-native";
import {
  CustomButton,
  Spacer,
  SignupLayout,
  PINInput,
} from "../../../components";
import { styles } from "./styles";

const SecurityScreen = () => {
  return (
    <SignupLayout>
      <View style={styles.body}>
        <Spacer>
          <PINInput light label="Create your PIN" />
        </Spacer>
        <Spacer />
        <CustomButton
          title="Continue"
          backgroundColor="white"
          color="#b3bab5"
          disabled
        />
      </View>
    </SignupLayout>
  );
};

export default SecurityScreen;
