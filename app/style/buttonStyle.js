import { StyleSheet } from "react-native";

import colors from "../config/colors";
import globals from "../config/globals";

const buttonStyle = StyleSheet.create({
  btn: {
    marginVertical: 5,
    height: 60,
    //backgroundColor: colors.primary, Already set in component file
    borderRadius: globals.radius,
    justifyContent: "center",
    alignItems: "center",
    //padding: 10,
    width: "100%",
  },
  pressed: {
    backgroundColor: colors.accent,
  },
  txt: { color: colors.white, fontWeight: "bold", fontSize: 18 },
});
export default buttonStyle;
