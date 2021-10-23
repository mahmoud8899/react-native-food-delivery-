import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'


const ScreenCurrent = ({ curent ,cartItem ,setCurent }) => {




    return <View style={Styles.curent}>
        <TouchableOpacity style={cartItem ? Styles.curentrouteRoute : Styles.curentroute} onPress={() => setCurent(Math.max(0, curent - 1))}>
            <Icons name="remove-outline" size={cartItem ? 23 :30} color={'#ff3b2f'} />
        </TouchableOpacity>
        <View style={Styles.curenttext}>
            <Text style={cartItem ? Styles.cartitemtext
               : Styles.curenttextfont
                }>{curent}</Text>
        </View>
        <TouchableOpacity style={cartItem ? Styles.curentrouteRoute  : Styles.curentroute} onPress={() => setCurent(curent + 1)}>
            <Icons name="add-outline" size={cartItem ? 23 :30} color={'#ff3b2f'} />
        </TouchableOpacity>
    </View>
}



const Styles = StyleSheet.create({
    curent: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    curentroute: {
        width: 50,
        height: 50,
        backgroundColor: '#f3f5f8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ff3b2f',
        borderWidth: 1,
    },
    curenttext: {
        width: 50,
        alignItems: 'center'
    },
    curenttextfont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff3b2f',
    },
    curentrouteRoute:{
        width: 35,
        height: 35,
        backgroundColor: '#f3f5f8',
        borderRadius: 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    cartitemtext:{
        fontSize : 17,
        color : '#ff3b2f',
        fontWeight : '300'
    }


})


export default ScreenCurrent