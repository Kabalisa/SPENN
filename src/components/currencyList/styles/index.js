import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const isIOS = Platform.OS === "ios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3d5251",
  },
  chooseCountryTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(90),
  },
  titleContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  titleIcon: {
    fontSize: 30,
    color: "#85e6b6",
  },
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
  currencyName: {
    marginLeft: wp(4),
    fontSize: 17,
    fontWeight: "600",
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
});

export { styles };
