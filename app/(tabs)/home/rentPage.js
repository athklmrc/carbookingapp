import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function RentPage() {
  return (
    <View>
      <Link href={{pathname: "./rentPage"}}> Rent Car </Link>
      <Link href={{pathname: "./rentPage"}}> Rent Room </Link>

    </View>
  )
}