import React from 'react'
import { View, Text } from 'react-native'
import styles from './AbilityStyle'
export const Ability = ({ item }) => {
    return (
        <View style={styles.container} testID={`ability-${item.slot}`}>
            <Text style={styles.name}>{item.ability.name}</Text>
        </View>
    )
}
