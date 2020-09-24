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
  smallIcon: {
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
});

export { styles };
