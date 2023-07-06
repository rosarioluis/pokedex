import React from 'react'
import { View, Text } from 'react-native'
import styles from './InfoStyle'
export const Info = ({title, value}) => {
    return (
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}
