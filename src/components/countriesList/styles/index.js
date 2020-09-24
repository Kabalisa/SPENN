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
  loginContainer: {
    flex: 1,
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
  smallIcon: {
    width: wp(7),
    height: hp(7),
  },
  rowOneText: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 12,
    marginBottom: hp(4),
    fontWeight: "600",
  },
  welcome: {
    display: "flex",
    flexDirection: "row",
    marginTop: hp(3),
  },
  welcomeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  addCountry: {
    width: wp(90),
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
  searchBar: {
    width: wp(90),
    backgroundColor: "#3d5251",
    padding: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginTop: hp(1),
  },
  flatlistContainer: {
    width: wp(98),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export { styles };
