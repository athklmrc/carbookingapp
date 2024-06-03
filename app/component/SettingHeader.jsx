import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

import styles from '../style/styles'
import colors from '../config/colors';

export default function SettingHeader({ title, icon}) {
  return (
    <View style={{marginTop: 22}}>
      <View style={settingStyle.sectionHeader}>
        <MaterialIcons name={icon} size={30} color={colors.primary} />
        <Text style={settingStyle.title}>{title}</Text>
      </View>
      <View style={settingStyle.separator}/>
    </View>


  )
}

const settingStyle = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  title: {
    fontSize:16,
    fontWeight: "bold",
    marginLeft: 10,

  },
  separator: {
    height:1,
    width: "auto",
    backgroundColor: colors.outline,
    marginVertical: 14,
  },

})