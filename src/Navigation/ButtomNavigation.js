import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeNavigation from './HomeNavigation'
import NavigatUser from './NavigationUser'

import { useSelector } from 'react-redux'
import ListCart from './TopTabs'
import ScreenHeart from '../ScreenHome/ScreenHeart/ScreenHeart'

const Tab = createBottomTabNavigator()



const ButtomNavigation = () => {

    const dataCart = useSelector((state) => state.dataCart)

    // all liek 
    const linke = useSelector((state) => state.linke)
    const { addData } = linke


    return (


        <Tab.Navigator
       
            screenOptions={{
                tabBarActiveTintColor: '#ff3b2f',
                tabBarInactiveTintColor: 'black',

            }}

           


        >
            <Tab.Screen name="Home" component={HomeNavigation} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" color={color} size={40} />
                ),
                headerShown: false,
            }} />




            <Tab.Screen name="Heart" component={ScreenHeart} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="heart-outline" color={color} size={40} />
                ),
                headerShown: false,
                tabBarBadge: addData?.length === 0 ? null : addData?.length,
            }} />

            <Tab.Screen name="ListCart" component={ListCart} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="cart-outline" color={color} size={40} />
                ),
                headerShown: false,
                tabBarBadge: dataCart?.length === 0 ? null : dataCart?.length,
            }} />







            <Tab.Screen name="MyProfil" component={NavigatUser} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="person-outline" color={color} size={40} />
                ),
                headerShown: false,
            }} />


        </Tab.Navigator>






    )

}


export default ButtomNavigation


/*
import NavigationAdmin from './NavigationAdmin'
   <Tab.Screen name="Admin" component={NavigationAdmin} options={{
                    tabBarIcon: ({ color }) => (
                        <Icons name="cog" color={color} size={30} />
                    ),
                    headerShown: false,
                }} />
                : null : null}
*/