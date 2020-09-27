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
    width: "100%",
  },
  location: {
    fontSize: 34,
  },
  countryContainer: {
    marginLeft: wp(2),
  },
  nextConntainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  next: {
    fontSize: 34,
  },
  check: {
    fontSize: 34,
  },
  chooseCountry: {
    fontSize: 16,
  },
  chosenCountry: {
    fontSize: 15,
    marginTop: hp(1),
  },
});

export { styles };
