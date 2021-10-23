import React, { useState } from 'react'
import { View, Image, Text, Pressable, } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import ScreenCurrent from '../../Middlare/Current'
import { Url } from '../../Middlare/Middlare'
import Styles from './style'

const ScreenCartItem = (props) => {

     const {item, AddToRemove } = props

    const [curent, setCurent] = useState(1)
    const [cartItem, setCartItem] = useState(true)

    return <View style={Styles.cart} key={item._id}>
            <View style={Styles.conatinerimage}>
            <Image source={{ uri: `${Url}${item.image[0]}` }}
            style={Styles.image}
        />
            </View>
        <View style={Styles.name}>
            <Text style={Styles.text}>{item.name}</Text>
            <View style={Styles.dow}>


                <ScreenCurrent
                    curent={curent}
                    cartItem={cartItem}
                    setCurent={setCurent}
                />
               <View>
               <Text style={Styles.pricetext}>${item.prics}</Text>
               </View>

            </View>
        </View>


        <Pressable style={Styles.remove} onPress={() => AddToRemove(item)}>
            <Icons name="trash-alt" size={17} color={'#ff3b2f'} style={Styles.removeicons} />

        </Pressable>
    </View>
}



export default ScreenCartItem