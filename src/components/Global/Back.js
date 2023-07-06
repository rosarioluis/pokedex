import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { APP_COLORS, POKEMON_COLORS } from '../../utils/constants'
import styles from './GlobalStyle'
export const Back = ({children, color}) => {
    const colorBack = color ? POKEMON_COLORS[color] : APP_COLORS.backColor
    return (
        <SafeAreaView style={{...styles.contentScreen, backgroundColor:`${colorBack}`}}>
                {children}
        </SafeAreaView>
    )
}
