import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  chooseCountryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",
    width: "100%",
  },
  location: {
    fontSize: 34,
    color: "#85e6b6",
  },
  countryContainer: {
    marginLeft: wp(2),
  },
  nextConntainer: {
    // backgroundColor: "blue",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  next: {
    fontSize: 34,
    color: "#d9d6d0",
  },
  chooseCountry: {
    color: "white",
    fontSize: 16,
  },
  chosenCountry: {
    color: "#b3bab5",
    fontSize: 15,
    marginTop: hp(1),
  },
});

export { styles };
