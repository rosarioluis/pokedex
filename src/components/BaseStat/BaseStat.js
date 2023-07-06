import React from 'react'
import { View, Text } from 'react-native'
import styles from './BaseStatStyle'
export const BaseStat = ({ stat }) => {
  const percentage = stat.base_stat > 100 ? 100 : stat.base_stat;
  return (
    <View style={styles.container} testID={`stat-${stat.stat.name}`}>
      <View style={styles.barContent}>
        <Text testID='statInfo' style={styles.textContent}>{stat.stat.name} - {stat.base_stat}</Text>
        <View testID='baseStatBar' style={{ ...styles.percentage, width: `${percentage}%` }} />
      </View>
    </View>
  )
}
