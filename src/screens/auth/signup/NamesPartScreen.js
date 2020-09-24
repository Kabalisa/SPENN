import React, { useContext } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import {
  CustomButton,
  ChooseCountry,
  Spacer,
  SignupLayout,
} from "../../../components";
import { Context as SignupContext } from "../../../context/SignupContext";
import { styles } from "./styles";

const NamesPartScreen = ({ navigation }) => {
  const { state } = useContext(SignupContext);

  const isDone = state.user.firstName && state.user.lastName;

  return (
    <SignupLayout>
      <View
        style={[
          styles.body,
          {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            alignContent: "space-between",
          },
        ]}
      >
        <View style={styles.element}>
          <ChooseCountry
            onPress={() => navigation.navigate("namesScreen")}
            light
            user
          />
        </View>
        <View style={styles.otherElement}>
          <View style={styles.terms}>
            <Text style={styles.termsText}>
              By singing up you agree to having read and
            </Text>
            <View style={styles.conditions}>
              <Text style={styles.termsText}>understood the</Text>
              <Text style={styles.termsBoldBText}>Terms & Conditions</Text>
            </View>
          </View>
          <Spacer />
          <CustomButton
            title="Create your PIN code"
            backgroundColor={isDone ? "#6dbd95" : "white"}
            color={isDone ? "white" : "#b3bab5"}
            onPress={
              isDone ? () => navigation.navigate("securityScreen") : () => null
            }
            disabled={!isDone}
          />
        </View>
      </View>
    </SignupLayout>
  );
};

export default NamesPartScreen;
