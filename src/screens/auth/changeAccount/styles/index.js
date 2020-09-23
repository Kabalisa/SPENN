import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3d5251",
  },
  rowOne: {
    height: "18%",
    width: wp(97),
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  rowTwo: {
    height: "64%",
    width: wp(95),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowThree: {
    height: "18%",
    width: wp(95),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icon: {
    width: wp(40),
    height: hp(40),
  },
  rowOneText: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 12,
    marginBottom: hp(4),
    fontWeight: "600",
  },
});

export { styles };
