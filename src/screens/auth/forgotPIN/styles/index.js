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
  lockIcon: {
    fontSize: 28,
    color: "#85e6b6",
    alignSelf: "center",
  },
  forgotBody: {
    width: wp(100),
    display: "flex",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wp(100),
    marginTop: hp(3),
  },
  titleTextContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: wp(80),
  },
  titleText: {
    color: "white",
    fontSize: 16,
  },
  changePin: {
    width: wp(100),
    display: "flex",
    alignItems: "center",
    marginTop: hp(8),
  },
  inputContainer: {
    width: wp(95),
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
  forgotContainer: {
    width: wp(90),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: hp(4),
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#85e6b6",
  },
});

export { styles };
