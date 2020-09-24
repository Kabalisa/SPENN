import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  phoneInput: {
    marginTop: hp(4),
    width: wp(90),
    display: "flex",
    flexDirection: "row",
  },
  phoneIcon: {
    fontSize: 24,
    marginLeft: wp(2),
    alignSelf: "center",
  },
  codeInput: {
    width: "30%",
    alignSelf: "center",
  },
  inputStyle: {
    color: "#85e6b6",
  },
  numberInput: {
    width: "61%",
    alignSelf: "center",
  },
});

export { styles };
