import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../utils/constants';
const AbilityStyle = StyleSheet.create({
    container: {
        borderColor: APP_COLORS.blueColor,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        height: 40,
        justifyContent: 'center'
    },
    name: {
        fontSize: 15,
        color: APP_COLORS.title,
        fontWeight:'600'
    }
});
export default AbilityStyle;