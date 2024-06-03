import { StyleSheet } from "react-native";

import colors from "../config/colors";
import globals from "../config/globals";

const formStyle = StyleSheet.create({
  container: {
    gap: 30,
    //height: 340,
    width: "100%",
    marginVertical: 40,
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderColor: colors.outline,
    borderRadius: globals.radius,
    justifyContent: "center",
    //alignItems: "center",
    padding: 20,
  },
  titleText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18, //default is ~13.5
    //marginBottom: 12,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
  },
  asterisk: {
    color: "red",
  },
  section: {},
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  error: {
    color: colors.error,
  },
});
export default formStyle;
