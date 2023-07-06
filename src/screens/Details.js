import React from 'react'
import { Back } from '../components/Global/Back'
import { Image, Text, View, ScrollView, FlatList } from 'react-native';
import { BaseStat } from '../components/BaseStat/BaseStat';
import { Info } from '../components/Info/Info';
import styles from './DetailsStyle'
import { Ability } from '../components/Ability/Ability';
import { PokemonType } from '../components/PokemonType/PokemonType'
import { Subtitle } from '../components/Global/Subtitle';
import useDetails from '../hooks/useDetails';
import { Loading } from '../components/Global/Loading';

export const Details = ({ route }) => {
  const pokemon = route.params?.item;
  const { loading, color } = useDetails(pokemon.id);
  return (
    <>
      {(loading) ? <Loading /> :
        <Back color={color}>
          <View style={styles.header}>
            <Image testID='pokemonImage' source={{ uri: pokemon.sprites.other["official-artwork"].front_default }} style={styles.image} />
          </View>
          <View style={styles.body}>
            <Text testID='pokemonName' style={styles.title}>#{pokemon.id} {pokemon.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              {pokemon.types.map((item, index) => {
                return <PokemonType name={item.type.name} fontSize={18} hg={35} key={index} />
              })
              }
            </View>
            <View style={styles.info}>
              <Info title='Height' value={`${pokemon.height} in`} />
              <Info title='Weight' value={`${pokemon.weight} lbs`} />
            </View>
            <Subtitle>Habilities</Subtitle>
            <FlatList
            testID='abilitiesList'
              data={pokemon.abilities}
              renderItem={({ item, index }) => {
                return <Ability item={item} key={index} />
              }}
              horizontal={true} />
            <Subtitle>Base stat</Subtitle>
            <ScrollView style={{ width: '100%' }}>
              {
                pokemon.stats.map((stat, index) => {
                  return <BaseStat key={index} stat={stat} />
                })
              }
            </ScrollView>
          </View>
        </Back>
      }
    </>
  )
}
