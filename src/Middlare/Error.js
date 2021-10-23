import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'


const HandleError = ({ error }) => {


    return <View style={Styles.Containererror}>
        <Text style={Styles.error}>{error ? error : null}</Text>
        <Icon name="sad-cry" size={50} color={'#ff3b2f'} style={{marginLeft  : 10,}} />

    </View>
}




const Styles = StyleSheet.create({
    Containererror: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF392F6B',
        borderRadius: 10,
        padding: 20,
        flexWrap : 'wrap'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        color: '#fff',
        textTransform: 'capitalize',
        
        marginTop: 0,

    }
})

export default HandleError