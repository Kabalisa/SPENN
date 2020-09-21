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
  nameText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: hp(1),
  },
  phoneNumber: {
    fontSize: 16,
    color: "white",
    marginBottom: hp(3),
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
    // backgroundColor: "red",
  },
  poweredContainer: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "red",
  },
  icon: {
    width: wp(9),
    height: hp(9),
    marginTop: hp(5),
  },
  avatar: {
    marginBottom: hp(2),
  },
});

export { styles };
