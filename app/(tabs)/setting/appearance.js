import { View, Text, Switch, StyleSheet } from 'react-native'
import React from 'react'

import styles from '../../style/styles'
import AppPicker from '../../component/AppPicker'


export default function Appearance() {

  const [ biggerFont, setBiggerFont] = React.useState(false);

  const colorschemedata = [
    {key: "1", label: "System"},
    {key: "2", label: "Light"},
    {key: "3", label: "Dark"},
  ]
  const dateformat = [
    {key: "1", label: "DD/MM/YYYY"},
    {key: "2", label: "DD-MM-YYYY"},
    {key: "3", label: "MM/DD/YYYY"},
    {key: "4", label: "MM-DD-YYYY"},

  ]

  return (
    <View style={[styles.root, {paddingHorizontal: 20}]}>

      <View style={appearanceStyle.setting}>
        <Text style={appearanceStyle.settingText}>Color Scheme: </Text>
        <AppPicker data={colorschemedata} />
      </View>
      <View style={appearanceStyle.setting}>
        <Text style={appearanceStyle.settingText}>Bigger Font Size: </Text>
        <Switch value={biggerFont} onValueChange={()=>setBiggerFont(!biggerFont)}/>
      </View>
      <View style={appearanceStyle.setting}>
        <Text style={appearanceStyle.settingText}>Date Format: </Text>
        <AppPicker data={dateformat}  width={150} />
      </View>

    </View>
  )
}
//topleft={{top: 204, left: 233}}

const appearanceStyle = StyleSheet.create({
  settingText: {fontSize: 16},
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    height: 50,
    paddingHorizontal: 10,
  },

})