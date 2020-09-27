import React, { useState, useContext } from "react";
import { View, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Context as CountryContext } from "../../context/CountryContext";
import Spacer from "../spacer";
import { styles } from "./styles";

const CurrencyList = () => {
  const { chooseCurrency } = useContext(CountryContext);

  const navigation = useNavigation();

  const [pesoActive, setPesoActive] = useState(false);
  const [kwachaActive, setKwachaActive] = useState(false);

  const activatePeso = () => {
    kwachaActive && setKwachaActive(false);
    setPesoActive(true);
  };
  const activateKwacha = () => {
    pesoActive && setPesoActive(false);
    setKwachaActive(true);
  };

  return (
    <View style={styles.container}>
      <Spacer />
      <View style={styles.chooseCountryTitle}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>choose currency</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" style={styles.titleIcon} />
        </TouchableOpacity>
      </View>
      <Spacer />
      <TouchableNativeFeedback onPress={activatePeso}>
        <View
          style={pesoActive ? styles.countryCardActive : styles.countryCard}
        >
          <Text
            style={[
              styles.currencyName,
              pesoActive ? { color: "white" } : { color: "#b3bab5" },
            ]}
          >
            Philipine Peso
          </Text>
          {pesoActive ? (
            <View style={styles.chooseContainer}>
              <TouchableOpacity
                style={styles.choose}
                onPress={() =>
                  chooseCurrency("Philipine Peso", () => navigation.goBack())
                }
              >
                <Text style={styles.chooseText}>choose</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={activateKwacha}>
        <View
          style={kwachaActive ? styles.countryCardActive : styles.countryCard}
        >
          <Text
            style={[
              styles.currencyName,
              kwachaActive ? { color: "white" } : { color: "#b3bab5" },
            ]}
          >
            Zambian Kwacha
          </Text>
          {kwachaActive ? (
            <View style={styles.chooseContainer}>
              <TouchableOpacity
                style={styles.choose}
                onPress={() =>
                  chooseCurrency("Zambian Kwacha", () => navigation.goBack())
                }
              >
                <Text style={styles.chooseText}>choose</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CurrencyList;
