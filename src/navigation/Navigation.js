import React from 'react'
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { APP_COLORS } from '../utils/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Pokedex',
                    headerStyle: {
                        backgroundColor: APP_COLORS.backColor,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor:'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30
                    },
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

