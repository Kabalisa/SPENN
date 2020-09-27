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
    alignItems: "center",
  },
  titleContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(3),
  },
  iconStyle: {
    marginTop: hp(2.5),
    marginLeft: wp(2),
  },
  titleStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export { styles };
