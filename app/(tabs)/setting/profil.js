import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import styles from '../../style/styles'
import colors from '../../config/colors'

export default function Profil() {

  function List({title, value}) {
    return (
      <View style={profilStyle.list}>
        <Text style={profilStyle.listHeader}>{title}</Text>
        <Text style={profilStyle.listValue}>{value}</Text>
      </View>
    )
  }

  return (
    <View style={styles.root}>
      <View style={[profilStyle.avatar, styles.shadows]} >
        <Text>  picture here  </Text>
      </View>
      <Image source={require("../../res/avatar.png")} style={profilStyle.avatar}  />


      <List title={"Name"} value={"Mr Cool Test"}/>
      <List title={"Telephone"} value={"+856 7383893"}/>
      <List title={"E-Mail"} value={"erergrge@gmail.com"}/>
    </View>
  )
}

const profilStyle = StyleSheet.create({
  avatar: {
    marginBottom: 40,
    alignSelf: "center",
    backgroundColor: "grey",
    //position: "absolute",
    height: 100,
    width: 100,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: "50%"
  },
  list: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1.5,
    },
    elevation: 10, // * android

    padding: 12,
    marginVertical: 8,
    borderColor: "black",
    borderWidth: 0,
    borderRadius: 6,
    backgroundColor: colors.background,
  },
  listHeader: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  listValue: {
    fontSize: 18,
  },
})