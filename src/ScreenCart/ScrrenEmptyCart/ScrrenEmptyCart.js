import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'


const ScreenEmptyCart = () => {


    return <View >

        <View>

            <IonIcons name="cart-outline" size={400} color={'#ff3b2f'} />

        </View>
        <View style={Styles.constainer}>
            <Text style={Styles.emptytext}>Cart is empty</Text>
            <IonIcons name="cart-outline" size={40} color={'#ff3b2f'} style={Styles.Icons} />

        </View>


    </View>

}




const Styles = StyleSheet.create({


    constainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptytext: {

        fontSize: 30,
        textTransform: 'capitalize',
        fontWeight: '300',
        color: '#FF392F91'

    },
    Icons: {

        width: 100,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#eee',
        textAlign: 'center',
        marginLeft: 10,
        borderColor: '#FF392F91',
        borderWidth: 1,


    },

})


export default ScreenEmptyCart