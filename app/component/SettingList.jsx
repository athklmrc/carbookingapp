import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

import colors from '../config/colors';

export default function SettingList({title, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.grey2} onPress={onPress}>
      <View style={settingListStyle.container}>
        <Text style={settingListStyle.text} >
          {title}
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.black} />
      </View>

    </TouchableHighlight>

  )
}

const settingListStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 17,
    color: colors.black,
    marginLeft: 10,
    marginVertical: 10,
  },


})