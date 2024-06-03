import { View, Text } from 'react-native'
import { router  } from "expo-router";
import React from 'react'

import AppButton from "../app/component/AppButton";
import styles from "../app/style/styles";
import WelcomeLogo from "./component/WelcomeLogo";

// this is the onboarding page
export default function Welcome() {

  const goTologinPage = () => {
    router.replace("./(auth)/signin");
  };

  return (
    <View style={[styles.root, styles.centered]}>
      <Text style={styles.titleText}>Start Using</Text>
      <WelcomeLogo />
      <Text style={[styles.titleText, { marginBottom: 200 }]}>
        Welcome to the <Text style={{ color: "#faa60f" }}>Booking</Text> app
      </Text>
      <AppButton text="Continue" onPress={goTologinPage} />
    </View>
  )
}