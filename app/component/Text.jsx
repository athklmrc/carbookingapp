import { View, Text as NativeText } from 'react-native'
import React from 'react'

import globals from '../config/globals'


export default function Text({children}) {
  return (
    <NativeText style={{fontSize: globals.fontSize}}>
      {children}
    </NativeText>
  )
}


