import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

import inputStyle from '../style/inputStyle'
import AppInputText from './AppInputText'

export default function AppSearchBar() {

  // can use Array.filter() method ?
  const [ filtered , setFiltered ] = React.useState();


  const search = "search" // multilingual support  i18n-js

  return (
    <AppInputText
      clearButtonMode="always" // ! the icon hide the clear button !!
      icon='search'
      placeholder={search}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
})