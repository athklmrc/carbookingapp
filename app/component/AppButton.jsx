import { Text, Pressable } from "react-native";
import React from "react";

import buttonStyle from "../style/buttonStyle";
import colors from "../config/colors";

// add Style props
export default function AppButton({ text = "mybutton", onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? colors.accent : colors.primary },
        buttonStyle.btn,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={buttonStyle.txt}>{text}</Text>
    </Pressable>
  );
}
