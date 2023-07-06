import {StyleSheet} from 'react-native';
import { APP_COLORS } from '../../utils/constants';
const InfoStyle = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'600',
        color:APP_COLORS.title
    },
    value:{
        fontSize: 15,
        fontWeight:'300',
        color:APP_COLORS.title
    }
});
export default InfoStyle;