// Authentication/Login Page
import {
  View,
  Text,
  TextInput,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
//import Checkbox from "expo-checkbox";

import Checkbox from "../component/AppCheckbox";
import WelcomeLogo from "../component/WelcomeLogo";
import AppForm from "../component/AppForm";
import AppButton from "../component/AppButton";
import AppInputText from "../component/AppInputText";
import styles from "../style/styles";
import formStyle from "../style/formStyle";
import colors from "../config/colors";

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [ error , setError ] = useState({})

  const ValidateForm = () => {
    let error = {}
    if (!email) error.email = "Email is required"
    if (!password) error.password = "Password is required"
    setError(error)
    return Object.keys(error).length === 0;
  }

  const handleSubmit = () => {
    if(ValidateForm()) {
      console.log('Auth submitted: ', email, password)
      setEmail("");
      setPassword("");
      setError({});
      router.replace("../(tabs)/home");
    }
  }


  return (
    <View style={[styles.root, styles.centered]}>

      <WelcomeLogo />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <AppForm title="Authentication">
        <View>
          <Text style={formStyle.text}>Enter Email: </Text>
          <AppInputText
            //icon={"alternate-email"}
            autoCorrect={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"  // * iOS
            value={email}
            onChangeText={(text) => setEmail(text)}
            inputMode="email"
            placeholder="youremail@provider"
            keyboardType="email-address"
            textContentType="emailAddress" // * iOS
            returnKeyType="next"
            enterKeyHint="next"
          />
        </View>
        { error.email ? <Text style={formStyle.error}> {error.email} </Text> : null }

        <View>
          <Text style={formStyle.text}>Enter Password: </Text>
          <AppInputText
            //icon={"key"}
            placeholder="***********"
            isPassword={true}
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="password" // *iOS
            value={password}
            onChangeText={(text) => setPassword(text)}
            returnKeyType="next"
          />
        </View>
        { error.password ? <Text style={formStyle.error}> {error.password} </Text> : null }

        <View style={formStyle.option}>
          <View style={formStyle.option}>
            <Checkbox
              value={isChecked}
              hitSlop={{ left: 10, top: 10, bottom: 10, right: 100 }} //trigger distance/area
              onValueChange={setChecked}
            />
            <Text style={{ marginLeft: 6 }}>Remember me</Text>
          </View>
          <Link href="./reset">forgot password?</Link>
        </View>
      </AppForm>

      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <AppButton text="Log In" onPress={handleSubmit} />
    </View>
  );
}
