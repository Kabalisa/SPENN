import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    height: hp(11),
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3d5251",
  },
  backIcon: {
    alignSelf: "center",
    marginTop: hp(4),
    marginLeft: wp(2),
  },
});

export { styles };
