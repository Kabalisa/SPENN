import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  done: {
    fontSize: 18,
    color: "#85e6b6",
    fontWeight: "600",
    marginTop: hp(0.5),
  },
  titleIcon: {
    fontSize: 30,
    color: "#85e6b6",
  },
  body: {
    marginTop: hp(2),
    width: wp(100),
    backgroundColor: "white",
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  element: {
    width: wp(97),
    marginTop: hp(3),
  },
  otherElement: {
    width: wp(100),
    marginTop: hp(3),
    display: "flex",
    alignItems: "center",
  },
  terms: {
    display: "flex",
    alignItems: "center",
  },
  conditions: {
    display: "flex",
    flexDirection: "row",
  },
  termsText: {
    fontSize: 17,
  },
  termsBoldBText: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: wp(2),
  },
  nameBody: {
    marginTop: hp(1),
    backgroundColor: "white",
    width: wp(100),
    flex: 1,
  },
});

export { styles };
