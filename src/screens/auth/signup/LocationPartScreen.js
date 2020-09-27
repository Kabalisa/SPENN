import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Context as CountryContext } from "../../../context/CountryContext";
import { Context as SignupContext } from "../../../context/SignupContext";
import {
  CustomButton,
  ChooseCountry,
  Spacer,
  PhoneInput,
  SignupLayout,
} from "../../../components";
import { styles } from "./styles";

const LocationPartScreen = ({ navigation }) => {
  const { state } = useContext(CountryContext);
  const { addLocation } = useContext(SignupContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  const isClickable = state.choosenCountry
    ? state.choosenCountry.currency
      ? false
      : true
    : false;

  return (
    <SignupLayout clear clearSignup>
      <View style={styles.body}>
        <View style={styles.element}>
          <ChooseCountry
            onPress={() => navigation.navigate("signupchoosecountry")}
            light
          />
        </View>
        <View style={[styles.element, { marginTop: 25 }]}>
          <ChooseCountry
            onPress={
              isClickable
                ? () => navigation.navigate("chooseCurrency")
                : () => null
            }
            light
            currency
          />
        </View>
        <View style={[styles.element, { marginTop: 0 }]}>
          <PhoneInput signup light setPhoneNumber={setPhoneNumber} />
        </View>
        <Spacer />
        <CustomButton
          title="looks good, continue"
          backgroundColor={phoneNumber ? "#6dbd95" : "white"}
          color={phoneNumber ? "white" : "#b3bab5"}
          onPress={
            phoneNumber
              ? () =>
                  addLocation("+250785382213", () =>
                    navigation.navigate("namesStack")
                  )
              : () => null
          }
          disabled={!phoneNumber}
        />
      </View>
    </SignupLayout>
  );
};

export default LocationPartScreen;
