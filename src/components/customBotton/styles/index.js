import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  button: {
    marginBottom: hp(2.5),
    width: wp(80),
    borderRadius: 12,
  },
  modalButton: {
    marginBottom: hp(2.5),
    width: "90%",
    borderRadius: 12,
  },
  smallButton: {
    width: "40%",
    borderRadius: 30,
  },
  diabledButton: {
    marginBottom: hp(2.5),
    width: "90%",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#b3bab5",
  },
});

export { styles };
