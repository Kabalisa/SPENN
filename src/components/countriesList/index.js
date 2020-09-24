import React, { useState, useContext } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, SearchBar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import CountryCard from "../countryCard";
import Spacer from "../spacer";
import { Context as CountryContext } from "../../context/CountryContext";
import { styles } from "./styles";

const CountriesList = () => {
  const {
    state,
    activateCountry,
    chooseCountry,
    searchCountries,
    clearSearch,
  } = useContext(CountryContext);
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  const handleSearch = (value) => {
    setSearch(value);
    searchCountries(value);
  };

  return (
    <View style={styles.loginContainer}>
      <Spacer />
      <View style={styles.chooseCountryTitle}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>choose country</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            clearSearch();
            navigation.goBack();
          }}
        >
          <AntDesign name="close" style={styles.titleIcon} />
        </TouchableOpacity>
      </View>
      <SearchBar
        placeholder="search"
        containerStyle={styles.searchBar}
        round
        lightTheme
        keyboardAppearance="dark"
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={handleSearch}
      />
      <Spacer />
      <FlatList
        data={state.searching ? state.searchedCountries : state.countries}
        renderItem={({ item }) => (
          <CountryCard
            country={item}
            handleActive={activateCountry}
            handleChoose={chooseCountry}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

export default CountriesList;
