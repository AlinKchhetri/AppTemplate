import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, lightFONTS, darkFONTS } from '../constants'

const Search = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:COLORS.black,}}>
      <Text style={{ ...darkFONTS.h1}}>Search</Text>
    </View>
  )
}

export default Search