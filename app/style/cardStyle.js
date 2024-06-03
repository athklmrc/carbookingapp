import { StyleSheet } from "react-native";

import colors from "../config/colors";
import globals from "../config/globals";

const cardStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.grey2,
    marginVertical: 6,
    borderRadius: globals.radius,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: globals.radius,
  },
  textHeading: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    marginLeft: 18,
  },
});

export default cardStyle;
