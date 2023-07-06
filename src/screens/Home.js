import React from 'react'
import { FlatList } from 'react-native'
import { PokemonCard } from '../components/PokemonCard/PokemonCard'
import useHome from '../hooks/useHome'
import { Back } from '../components/Global/Back'

export const Home = () => {
  const { pokemons, loadMore, renderFooter } = useHome();
  return (
    <Back>
          <FlatList
          testID='pokemonsList'
            data={pokemons}
            renderItem={({ item }) => {
              return <PokemonCard item={item} key={item.id}/>}}
            ListFooterComponent={renderFooter}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            />
   </Back>
  )
}
