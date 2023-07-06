import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './PokemonCardStyle';
import { PokemonType } from '../PokemonType/PokemonType';
export const PokemonCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity testID={`pokemonCard-${item.id}`} style={styles.container} onPress={()=>navigation.navigate('Details', {item})}>
      <Image testID='pokemonImage' style={styles.image} source={{ uri: item.sprites.other["official-artwork"].front_default }} />
      <View style={styles.bodyContent}>
        <Text style={styles.pokemonId}>#{(item.id.toString()).padStart(3, "0")}</Text>
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
      <View style={styles.typesContent}>
        {
          item.types.map((type, index) => {
            return <PokemonType name={type.type.name} key={index} hg={25} fontSize={11} />
          })
        }
      </View>
    </TouchableOpacity>)
};
