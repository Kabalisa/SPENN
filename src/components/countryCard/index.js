import React from "react";
import { View, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { Text, Image, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const CountryCard = ({ country, handleActive, handleChoose }) => {
  const navigation = useNavigation();
  const { id, name, code, flag, active, choosen } = country;

  return (
    <TouchableNativeFeedback onPress={() => handleActive(id)}>
      <View style={active ? styles.countryCardActive : styles.countryCard}>
        <Image source={flag} style={styles.flagIcon} />
        <View style={styles.countryInfo}>
          <Text
            style={[
              styles.countryName,
              active ? { color: "white" } : { color: "#b3bab5" },
            ]}
          >
            {name}
          </Text>
          <Text style={styles.countryCode}>{code}</Text>
        </View>
        {active ? (
          <View style={styles.chooseContainer}>
            {choosen ? (
              <Avatar
                size={35}
                rounded
                icon={{
                  name: "checkcircle",
                  type: "antdesign",
                  size: 35,
                  color: "#08a12f",
                }}
                containerStyle={styles.checkIcon}
              />
            ) : (
              <TouchableOpacity
                style={styles.choose}
                onPress={() => handleChoose(id, () => navigation.goBack())}
              >
                <Text style={styles.chooseText}>choose</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </View>
    </TouchableNativeFeedback>
  );
};

export default CountryCard;
