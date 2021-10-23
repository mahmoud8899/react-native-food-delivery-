import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import ScreenHome from '../ScreenHome/ScreenHome'
import ScreenProduct from '../ScreenHome/ScreenProduct/ScreenProduct'



const HomeNavigation = (props) => {



    return (

        <Stack.Navigator>



            <Stack.Screen name="PageHome" component={ScreenHome}
                options={{
                    headerShown: false,
                }} />


            <Stack.Screen name="Product" component={ScreenProduct}
                options={{
                    headerShown: false,
                }} />




        </Stack.Navigator>

    )
}


export default HomeNavigation


/*

   <Stack.Screen name="firstDrower" component={CustomDrawerContent}
                options={{
                    headerShown: false,
                }} />
                import CustomDrawerContent from './DrawerUser'
*/