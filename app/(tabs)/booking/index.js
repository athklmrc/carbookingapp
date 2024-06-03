import { View, Text, StyleSheet, Pressable, ScrollView, FlatList } from "react-native";
import { Link, router } from 'expo-router';


import AppSearchBar from "../../component/AppSearchBar";
import AppButton from "../../component/AppButton";
import CardBookingVehicle from "../../component/CardBookingVehicle";
import CardBookingRoom from "../../component/CardBookingRoom";
import styles from "../../style/styles";
import { useState } from "react";



export default function Booking() {


  function navigationHandler(link) {
    router.navigate(`/booking/${link}`);
  }

  return (
    <View style={styles.root}>

      <AppButton text="Book Vehicle" onPress={()=>navigationHandler("bookvehicle")}/>
      <AppButton text="Book Room" onPress={()=>navigationHandler("bookroom")}/>




    </View>
  );
}

const styless = StyleSheet.create({
  search: {
    marginBottom: 16
  },

})