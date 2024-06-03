import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

import React from 'react'

export default function AuthLayout() {
  return (

    <Stack>
      <Stack.Screen name="signin" options={{headerShown: false}}/>
      <Stack.Screen name="reset" options={{headerShown: false}}/>
    </Stack>

  )
}

