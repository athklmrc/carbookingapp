import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Image } from 'expo-image';
import React from "react";

import AppText from "../../component/AppText";
import colors from "../../config/colors";
import styles from "../../style/styles";




export default function Home() {

  //const authContext = useContext(AuthContext);
  //  const {user, profession} = useContext(AuthContext);


  const profil = {
    name: "Mr Happy",
    job: "programmer",
  }


  function navigationHandler(link) {
    router.navigate(`/setting/${link}`);
  }

  return (
    <View style={styles.root}>
      <View style={styles.flexRow}>

        <Pressable style={{flexDirection: "row"}} onPress={()=>navigationHandler("profil")}>
          <Image source={require("../../res/avatar.png")} style={homeStyle.avatar} />
          <View>
            <Text>{profil.name}</Text>
            <Text>{profil.job}</Text>
          </View>
        </Pressable>

        <Pressable style={homeStyle.language} onPress={()=>navigationHandler("language")}>
          <Image source={require("../../res/home_lang.png")} style={homeStyle.avatar} />
          <Text>Change Language</Text>
        </Pressable>
      </View>

      <Text style={homeStyle.heading}> Dashboard </Text>


      <View style={homeStyle.section}>
        <Text >This is the default system fontSize. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
        <AppText>This is the AppText Component, when an unknown printer tookhen an unknown printer took hen an unknown printer took  a galley</AppText>
        <Text style={homeStyle.heading}> Statistics </Text>
        <Text>Total:</Text>
        <Text>Sucessfully Booked: 43</Text>
        <Text>Cancelled: 43</Text>
        <Text>Failed: 43</Text>


      </View>


    </View>
  );
}

const homeStyle = StyleSheet.create({
  section: {
    borderRadius: 6,
    backgroundColor: colors.grey,
    padding: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  language: {
    marginLeft: "auto",
  },
  heading:{
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,

  }

});