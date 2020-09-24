import React, { useContext } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Context as SignupContext } from "../../context/SignupContext";
import { styles } from "./styles";

const SignupProgress = () => {
  const { state } = useContext(SignupContext);

  const { location, name, security } = state;

  return (
    <View style={styles.signupProgress}>
      <View style={styles.barElement}>
        <Text
          style={[
            styles.text,
            location.active ? { color: "#85e6b6" } : { color: "white" },
          ]}
        >
          Location
        </Text>
        {location.done ? (
          <MaterialCommunityIcons name="check-decagram" style={styles.icon} />
        ) : null}
      </View>
      <View style={styles.barElement}>
        <Text
          style={[
            styles.text,
            name.active ? { color: "#85e6b6" } : { color: "white" },
          ]}
        >
          You
        </Text>
        {name.done ? (
          <MaterialCommunityIcons name="check-decagram" style={styles.icon} />
        ) : null}
      </View>
      <View style={styles.barElement}>
        <Text
          style={[
            styles.text,
            security.active ? { color: "#85e6b6" } : { color: "white" },
          ]}
        >
          Security
        </Text>
        {security.done ? (
          <MaterialCommunityIcons name="check-decagram" style={styles.icon} />
        ) : null}
      </View>
    </View>
  );
};

export default SignupProgress;
