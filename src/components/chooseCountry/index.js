import React, { useContext } from "react";
import { View, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import {
  EvilIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { Context as CountryContext } from "../../context/CountryContext";
import { Context as SignupContext } from "../../context/SignupContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { styles } from "./styles";

const ChooseCountry = ({ onPress, light, currency, user }) => {
  const { state } = useContext(CountryContext);
  const { state: signupState } = useContext(SignupContext);

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.chooseCountryContainer}>
        {currency ? (
          <FontAwesome5
            name="money-bill"
            style={[
              styles.location,
              light
                ? { color: "#71c99d", fontSize: 24 }
                : { color: "#85e6b6", fontSize: 24 },
            ]}
          />
        ) : user ? (
          <Feather
            name="user"
            style={[
              styles.location,
              light ? { color: "#71c99d" } : { color: "#85e6b6" },
            ]}
          />
        ) : (
          <EvilIcons
            name="location"
            style={[
              styles.location,
              light ? { color: "#71c99d" } : { color: "#85e6b6" },
            ]}
          />
        )}
        <View
          style={[
            styles.countryContainer,
            currency ? { marginLeft: wp(3) } : {},
          ]}
        >
          <Text
            style={[
              styles.chooseCountry,
              light ? { color: "#3d5251" } : { color: "white" },
            ]}
          >
            {currency && state.choosenCountry
              ? !state.choosenCountry.currency
                ? "Choose currency"
                : state.choosenCountry.currency
              : currency && !state.choosenCountry
              ? "Choose currency"
              : user && signupState.user.firstName && signupState.user.lastName
              ? `${signupState.user.firstName} ${signupState.user.middleName} ${signupState.user.lastName}`
              : user &&
                !signupState.user.firstName &&
                !signupState.user.lastName
              ? "Add your name"
              : state.choosenCountry
              ? state.choosenCountry.name
              : "Choose country"}
          </Text>
          <Text
            style={[
              styles.chosenCountry,
              light ? { color: "#929c95" } : { color: "#b3bab5" },
            ]}
          >
            {currency ? "local currency" : user ? "full name" : "Country"}
          </Text>
        </View>
        <TouchableOpacity style={styles.nextConntainer} onPress={onPress}>
          {currency && state.choosenCountry ? (
            !state.choosenCountry.currency ? (
              <MaterialIcons
                name="navigate-next"
                style={[
                  styles.next,
                  light ? { color: "#bdb7ac" } : { color: "#d9d6d0" },
                ]}
              />
            ) : (
              <AntDesign
                name="check"
                style={[
                  styles.check,
                  light ? { color: "#71c99d" } : { color: "#85e6b6" },
                ]}
              />
            )
          ) : user ? (
            !signupState.user.firstName || !signupState.user.lastName ? (
              <MaterialIcons
                name="navigate-next"
                style={[
                  styles.next,
                  light ? { color: "#bdb7ac" } : { color: "#d9d6d0" },
                ]}
              />
            ) : (
              <AntDesign
                name="check"
                style={[
                  styles.check,
                  light ? { color: "#71c99d" } : { color: "#85e6b6" },
                ]}
              />
            )
          ) : state.choosenCountry ? (
            <AntDesign
              name="check"
              style={[
                styles.check,
                light ? { color: "#71c99d" } : { color: "#85e6b6" },
              ]}
            />
          ) : (
            <MaterialIcons
              name="navigate-next"
              style={[
                styles.next,
                light ? { color: "#bdb7ac" } : { color: "#d9d6d0" },
              ]}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChooseCountry;
