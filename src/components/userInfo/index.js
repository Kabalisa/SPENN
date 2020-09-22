import React from "react";
import { Avatar, Text } from "react-native-elements";
import { styles } from "./styles";

const UserInfo = () => {
  return (
    <>
      <Avatar
        size={65}
        rounded
        icon={{ name: "user-circle", type: "font-awesome", size: 65 }}
        containerStyle={styles.avatar}
      />
      <Text style={styles.nameText}>Innocent Fiston Kabalisa</Text>
      <Text style={styles.phoneNumber}>+250785382213</Text>
    </>
  );
};

export default UserInfo;
