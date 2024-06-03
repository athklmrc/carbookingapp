// Authentication/Login Page
import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";

import styles from "../style/styles";
import WelcomeLogo from "../component/WelcomeLogo";
import AppForm from "../component/AppForm";
import AppButton from "../component/AppButton";
import AppInputText from "../component/AppInputText";
import formStyle from "../style/formStyle";

export default function Reset() {

  function resetPasswordHandler() {
    Alert.alert("A new password has been sent to your email")
  }


  return (
    <View style={[styles.root, styles.centered]}>
      <WelcomeLogo />
      <AppForm title="Reset Password">
        <View>
          <Text style={formStyle.text}>Enter your  </Text>
          <AppInputText
            placeholder="*******@******.***"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </View>
        <View>
          <Text style={formStyle.text}>Enter something </Text>
          <AppInputText placeholder="*******" secureTextEntry={true} />
        </View>
      </AppForm>

      <AppButton text="Reset" onPress={resetPasswordHandler} />
    </View>
  );
}
