import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react"
import ScreenConfirm from "../ScreenCart/ScreenConfirm/ScreenConfirm"
import ScreenPayment from "../ScreenCart/ScreenPayment/ScreenPayment"
import ScreenShipping from "../ScreenCart/ScreenShipping/ScreenShipping"
import ScreenCart from "../ScreenCart/ScreenCart"
const Tops = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()
const TopTabs = () => {



    return (
        <Tops.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: {
                    fontSize: 16,
                    color: '#ff3b2f',
                    fontWeight:
                        '400',
                    textTransform: 'capitalize'
                },
                
                

            }}
        >
            <Tops.Screen name="Shipping" component={ScreenShipping} />
            <Tops.Screen name="Payment" component={ScreenPayment} />
            <Tops.Screen name="Confirm" component={ScreenConfirm} />
        </Tops.Navigator>

    )
}





const ListCart = () => {

    return <Stack.Navigator>
        <Stack.Screen name="Cart" component={ScreenCart} options={{headerShown: false,}} />
        <Stack.Screen name="CheckOut" component={TopTabs} options={{headerShown: false,}} />
    </Stack.Navigator>
}


export default ListCart