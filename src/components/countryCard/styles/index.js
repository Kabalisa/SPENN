import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const isIOS = Platform.OS === "ios";

const styles = StyleSheet.create({
  countryCard: {
    width: wp(94),
    height: hp(12),
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3c4241",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: hp(2),
  },
  countryCardActive: {
    width: wp(94),
    height: hp(12),
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2c3332",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 0.2,
    elevation: isIOS ? 0 : 5,
  },
  flagIcon: {
    width: 50,
    height: 50,
    marginLeft: wp(3),
  },
  countryInfo: {
    marginLeft: wp(4),
    height: hp(9),
    width: "40%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  countryName: {
    width: "100%",
    fontSize: 17,
    fontWeight: "600",
  },
  countryCode: {
    color: "#b3bab5",
    width: "100%",
    fontSize: 15,
  },
  chooseContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  choose: {
    backgroundColor: "#08a12f",
    marginRight: wp(6),
    padding: 7,
    borderRadius: 9,
  },
  chooseText: {
    color: "white",
    fontWeight: "600",
  },
  checkIcon: {
    backgroundColor: "white",
    marginRight: wp(8),
  },
});

export { styles };
