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
    // backgroundColor: "red",
    width: wp(90),
  },
  phoneInput: {
    marginTop: hp(4),
    width: wp(90),
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  phoneIcon: {
    fontSize: 24,
    color: "#85e6b6",
    marginLeft: wp(2),
    // backgroundColor: "blue",
    alignSelf: "center",
  },
  codeInput: {
    width: "30%",
    // backgroundColor: "yellow",
    alignSelf: "center",
  },
  numberInput: {
    width: "61%",
    // backgroundColor: "green",
    alignSelf: "center",
  },
  inputStyle: {
    color: "#85e6b6",
  },
});

export { styles };
