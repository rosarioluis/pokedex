import { APP_COLORS } from '../utils/constants';
const windowWidth = Dimensions.get('window').width;
import {StyleSheet, Dimensions} from 'react-native'
const DetailsStyle = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        zIndex: 2
      },
      info:{
        flexDirection: 'row',
         width: '80%', 
         marginVertical:10 
      },
      body: {
        flex: 3,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 50,
        alignItems: 'center'
      },
      image: {
        width: windowWidth * 0.50,
        aspectRatio: 1,
        resizeMode: 'contain',
        bottom: -50,
        position: 'absolute',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: APP_COLORS.title
      }
});
export default DetailsStyle;