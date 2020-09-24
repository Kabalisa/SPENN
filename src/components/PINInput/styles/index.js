import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  inputContainer: {
    width: wp(85),
    marginTop: hp(3),
  },
  inputContainerStyle: {
    borderColor: "#6dbd95",
    borderBottomWidth: 3,
  },
  inputStyle: {
    textAlign: "center",
    color: "#85e6b6",
  },
  inputIcon: {
    fontSize: 28,
    color: "white",
  },
});

export { styles };
