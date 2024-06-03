import { Text } from "react-native";
import React from "react";

import globals from "../config/globals";

// CUSTOM TEXT COMPONENT FOR CONSISTENT TEXT SIZE
// import as <Text></Text> component

export default function AppText(props) {
  return (
    <Text style={{ fontSize: globals.fontSize }} {...props}>
      {props.children}
    </Text>
  );
}
