import React from "react";
import { View, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const ChooseCountry = () => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.chooseCountryContainer}>
        <EvilIcons name="location" style={styles.location} />
        <View style={styles.countryContainer}>
          <Text style={styles.chooseCountry}>Choose country</Text>
          <Text style={styles.chosenCountry}>Country</Text>
        </View>
        <TouchableOpacity style={styles.nextConntainer}>
          <MaterialIcons name="navigate-next" style={styles.next} />
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChooseCountry;
