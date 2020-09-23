import React, { useContext } from "react";
import { View, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { EvilIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Context as CountryContext } from "../../context/CountryContext";
import { styles } from "./styles";

const ChooseCountry = ({ onPress }) => {
  const { state } = useContext(CountryContext);

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.chooseCountryContainer}>
        <EvilIcons name="location" style={styles.location} />
        <View style={styles.countryContainer}>
          <Text style={styles.chooseCountry}>
            {state.choosenCountry
              ? state.choosenCountry.name
              : "Choose country"}
          </Text>
          <Text style={styles.chosenCountry}>Country</Text>
        </View>
        <TouchableOpacity style={styles.nextConntainer} onPress={onPress}>
          {state.choosenCountry ? (
            <AntDesign name="check" style={styles.check} />
          ) : (
            <MaterialIcons name="navigate-next" style={styles.next} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChooseCountry;
