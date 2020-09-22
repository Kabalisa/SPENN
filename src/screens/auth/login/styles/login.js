import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d5251",
    alignItems: "center",
  },
  icon: {
    width: wp(7),
    height: hp(7),
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
  loginBody: {
    marginTop: hp(5),
    display: "flex",
    alignItems: "center",
  },
  inputContainer: {
    width: wp(85),
    marginTop: hp(3),
  },
  inputContainerStyle: {
    borderColor: "#6dbd95",
    borderBottomWidth: 3,
  },
  inputStyle: {
    textAlign: "center",
    color: "#85e6b6",
  },
  inputIcon: {
    fontSize: 28,
    color: "white",
  },
  forgotContainer: {
    width: wp(85),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: hp(3),
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#85e6b6",
  },
});

export { styles };
