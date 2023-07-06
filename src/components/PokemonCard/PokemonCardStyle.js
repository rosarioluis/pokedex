import {StyleSheet} from 'react-native';
import { APP_COLORS } from '../../utils/constants';
const PokemonCardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#E7E5E5',
    height: 80,
    marginVertical:5,
    marginHorizontal:25,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20
  },
  image:{
    flex:1,
    height:'90%',
    width:'90%',
    resizeMode:'contain'
  },
  bodyContent:{
    flex:2,
    flexDirection:'column',
    marginHorizontal:10
  },
  typesContent:{
    flex:1,
    flexDirection:'column'
  },
  pokemonName:{
    color:APP_COLORS.title,
    fontWeight:'bold',
    fontSize:15
  },
  pokemonId:{
    color:APP_COLORS.title,
    fontWeight:'600',
    fontSize:12
  }
});
export default PokemonCardStyle;
