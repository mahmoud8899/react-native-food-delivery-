import React, { useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenLogin from '../ScreenProFil/ScreenLogin/ScreenLogin'
import ScreenRegister from '../ScreenProFil/ScreenRegister/ScreenRegister'
import ScreenProFile from '../ScreenProFil/ScreenProFil'
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()


const NavigatUser = () => {



 //   const userLogin = useSelector((state) => state.userLogin)
  //  const { userInfo } = userLogin


    // console.log('check user info',typeof userLogin)



    return <Stack.Navigator>

        <Stack.Screen name="Profil" component={ScreenProFile} options={{ headerShown: false }} />


        <Stack.Screen name="Login" component={ScreenLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={ScreenRegister} options={{ headerShown: false }} />



    </Stack.Navigator>
}


export default NavigatUser