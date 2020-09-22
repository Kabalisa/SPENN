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
  poweredBy: {
    fontSize: 12,
    color: "#85e6b6",
  },
  bankNameContainer: {
    flexDirection: "row",
  },
  IandM: {
    fontSize: 25,
    color: "#85e6b6",
    fontWeight: "bold",
  },
  bank: {
    fontSize: 25,
    color: "#85e6b6",
  },
  middleContainer: {
    display: "flex",
    alignItems: "center",
    width: wp(100),
  },
  poweredContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: wp(9),
    height: hp(9),
    marginTop: hp(5),
  },
});

export { styles };
