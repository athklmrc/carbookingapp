import { StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
import globals from "../config/globals";


const styles = StyleSheet.create({
  //  colors,
  root: {
    padding: 12,
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    //fontFamily: Platform.OS==="android"?"Roboto":"Avenir",
    fontSize: globals.fontSize,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: colors.black,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  shadows: {
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1.5,
    },
    elevation: 10, // android
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginVertical: 14,
  },

  flexRow: {
    flexDirection: "row",
  },

});

export default styles;
