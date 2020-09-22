import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  avatar: {
    marginBottom: hp(2),
  },
  nameText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
    marginBottom: hp(1),
  },
  phoneNumber: {
    fontSize: 16,
    color: "#85e6b6",
    marginBottom: hp(3),
  },
});

export { styles };
