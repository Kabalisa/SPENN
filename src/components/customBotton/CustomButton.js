import React from "react";
import { Button } from "react-native-elements";
import { styles } from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CustomButton = ({ title, backgroundColor, color }) => {
  return (
    <Button
      title={title}
      containerStyle={styles.button}
      buttonStyle={{ height: hp(8), backgroundColor }}
      titleStyle={{ color, fontSize: 19, fontWeight: "600" }}
    />
  );
};

export default CustomButton;
