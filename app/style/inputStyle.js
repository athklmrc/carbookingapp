import { StyleSheet } from "react-native";

import colors from "../config/colors";
import globals from "../config/globals";

const inputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    //marginVertical: 10,
    height: 50,
    backgroundColor: colors.background,
    borderRadius: globals.radius,
    //justifyContent: "flex-start",
    alignItems: "center",
    padding: 6,
    //width: 'auto',
    borderWidth: 1,
    borderColor: colors.outline,
  },
  textInput: {
    width: "100%",
    marginLeft: 8,
  },
  icon:{
    marginLeft: 6,
    //alignSelf: "flex-end"
  },
  eyeicon: {
    marginLeft: "auto",
    marginRight: 8,
    zIndex: 1,
  },
  focused: {
    borderColor: colors.accent,
    borderWidth: 2,
  }
});
export default inputStyle;
