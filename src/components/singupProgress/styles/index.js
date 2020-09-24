import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  signupProgress: {
    display: "flex",
    flexDirection: "row",
    width: wp(93),
    justifyContent: "space-between",
  },
  barElement: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
    color: "#85e6b6",
    marginLeft: wp(1.5),
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
  },
});

export { styles };
