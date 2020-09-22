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
});

export { styles };
