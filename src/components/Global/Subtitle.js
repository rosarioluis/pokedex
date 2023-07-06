import React from 'react'
import { View,Text } from 'react-native'
import styles from './GlobalStyle'
export const Subtitle = ({children}) => {
  return (
    <View style={{marginBottom:15}}>
        <Text style={styles.txtSubtitle}>{children}</Text>
    </View>
  )
}
