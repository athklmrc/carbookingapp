import { Image, SafeAreaView } from "react-native";
import React from "react";

export default function WelcomeLogo() {
  const logoStyle = {
    height: 100,
    objectFit: "scale-down",
    alignSelf: "center",
  };
  return (
    <SafeAreaView>
      <Image style={logoStyle} source={require("../res/logo.png")} />
    </SafeAreaView>
  )
}
