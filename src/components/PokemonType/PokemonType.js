import React from 'react'
import { View, Text } from 'react-native';
import { TYPE_COLORS } from '../../utils/constants';
import styles from './PokemonTypeStyle';
 export const PokemonType = ({ name, fontSize, hg}) => {
  return (
    <View testID={`type-${name}`} style={{...styles.container, backgroundColor:TYPE_COLORS[name], height:hg}}>
      <Text style={{...styles.title, fontSize:fontSize}}>{name}</Text>
    </View>
  )
}
