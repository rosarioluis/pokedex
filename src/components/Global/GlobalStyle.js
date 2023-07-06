import {StyleSheet} from 'react-native';
import { APP_COLORS } from '../../utils/constants';
const GlobalStyle = StyleSheet.create({
  contentScreen: {
      flex:1
  },
  container:{
      flex:1,
      marginTop:20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSubtitle:{
    fontSize: 22,
        fontWeight: 'bold',
        color: APP_COLORS.title
  }
});
export default GlobalStyle;