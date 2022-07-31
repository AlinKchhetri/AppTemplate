import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, lightFONTS, darkFONTS } from '../constants'

const NavBar = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:COLORS.black,}}>
      <Text style={{ ...darkFONTS.body5}}>Home</Text>
    </View>
  )
}

export default NavBar