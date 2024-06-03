import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';



import styles from "../style/styles";
import inputStyle from "../style/inputStyle";
import colors from "../config/colors";


// TODO bring TextInput props into parameter

export default function AppInputText({
  icon,
  inputMode,
  clearButtonMode,
  autoCorrect,
  autoCapitalize,
  keyboardType = "default",
  textContentType, // * iOS
  multiline = false,
  placeholder,
  isPassword = false,
  style,
  ...props
}) {

  const [ isFocused, setIsFocused ] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <View style={[inputStyle.container, style , isFocused && inputStyle.focused]}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          style={inputStyle.icon}
          color={"grey"}
        />
      )}

      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        //inlineImageLeft={icon} // * Android
        //inlineImagePadding={5}  // * Android
        clearButtonMode={clearButtonMode}  // * iOS
        hitSlop={5}
        style={inputStyle.textInput}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        inputMode={inputMode}
        keyboardType={keyboardType}
        multiline={multiline}
        textContentType={textContentType} // * iOS
        secureTextEntry={isPassword && hidePassword}
        //onFocus={styleFocus}
        {...props}
      />

      {isPassword && (
        <Pressable style={inputStyle.eyeicon} hitSlop={5} onPress={() => setHidePassword(!hidePassword)}>
          <FontAwesome5
            name={hidePassword ? "eye" : "eye-slash"}
            size={24}
            color="#215ebf"
          />
        </Pressable>
      )}
    </View>
  );
}
