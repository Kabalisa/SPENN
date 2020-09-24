import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  modalContainner: {
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    width: wp("80%"),
    height: hp("50%"),
    display: "flex",
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginBottom: hp(-1.5),
    backgroundColor: "white",
    zIndex: 2,
  },
  contentContainer: {
    backgroundColor: "white",
    height: hp("35%"),
    borderRadius: 15,
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingBottom: hp(1),
    padding: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "600",
  },
  modalBody: {
    marginTop: hp(3),
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    width: "95%",
    marginBottom: hp(4),
  },
  modalBodyText: {
    fontSize: 17,
    color: "#4b4f4c",
  },
});
