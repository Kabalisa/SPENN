import React, { useState, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Spacer, NameInput } from "../../../components";
import { Context as SignupContext } from "../../../context/SignupContext";
import { styles } from "./styles";

const NamesScreen = ({ navigation }) => {
  const { addNames } = useContext(SignupContext);
  const [names, setNames] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const handleSetName = (type, value) => {
    setNames({
      ...names,
      [type]: value,
    });
  };

  const isDone = names.firstName && names.lastName;

  return (
    <View style={styles.container}>
      <Spacer />
      <View style={styles.chooseCountryTitle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" style={styles.titleIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>choose currency</Text>
        </View>
        <TouchableOpacity
          onPress={
            isDone
              ? () => addNames(names, () => navigation.goBack())
              : () => null
          }
        >
          <Text
            style={[
              styles.done,
              isDone ? { color: "#85e6b6" } : { color: "#929c95" },
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameBody}>
        <Spacer />
        <Spacer>
          <NameInput
            label="First Name"
            placeholder="Required"
            type="firstName"
            handleSetName={handleSetName}
          />
        </Spacer>
        <Spacer>
          <NameInput
            label="Middle Name"
            placeholder="Optional"
            type="middleName"
            handleSetName={handleSetName}
          />
        </Spacer>
        <Spacer>
          <NameInput
            label="Last Name"
            placeholder="Required"
            type="lastName"
            handleSetName={handleSetName}
          />
        </Spacer>
      </View>
    </View>
  );
};

export default NamesScreen;
