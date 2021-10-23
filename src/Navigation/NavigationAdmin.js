


import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ScreenCategory from "../ScreenAdmin/ScreenListCategory/ScreenListCategory"

import ScreenListProduct from "../ScreenAdmin/ScreenListProduct/ScreenListProduct"
import ScreenListFormProduct from "../ScreenAdmin/ScreenListFormProduct/ScreenListFormProduct"
import React from "react"
const Stack = createNativeStackNavigator()


const NavigationAdmin = () => {


    return <Stack.Navigator>
        <Stack.Screen name="ScreenListProduct" component={ScreenListProduct} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenCategory" component={ScreenCategory} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenListFormProduct" component={ScreenListFormProduct} options={{ headerShown: false }} />
    </Stack.Navigator>

}


export default NavigationAdmin