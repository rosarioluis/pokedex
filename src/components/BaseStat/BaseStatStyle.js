import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../utils/constants';
const BaseStatStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    barContent: {
        height: 25,
        flex: 3,
        width: '100%',
        marginVertical: 5,
        border: 'solid',
        borderColor: APP_COLORS.blueColor,
        borderWidth: 1,
        borderRadius: 10
    },
    textContent: {
        color: '#3E3E3E',
        fontSize: 16,
        paddingHorizontal: 10,
        position: 'absolute',
        zIndex: 2,
        width: '80%',
        fontWeight: '400',
        textAlignVertical: 'center'
    },
    percentage: {
        backgroundColor:APP_COLORS.blueColor,
        height: '100%',
        borderRadius: 9,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: APP_COLORS.blueColor
    }

});
export default BaseStatStyle;