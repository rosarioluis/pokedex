import React from 'react'
import { View,ActivityIndicator } from 'react-native'
import styles from './GlobalStyle'
export const Loading = () => {
  return (
    <View style={styles.loadingContainer} testID='loadingIcon'>
      <ActivityIndicator
        color='blue'
        size={'large'}
      />
    </View>
  )
}
