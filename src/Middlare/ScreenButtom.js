import {TouchableOpacity, View,Text,StyleSheet} from 'react-native'
import React from 'react'



const ScreenButtom = (props)=>{

    const {title} = props




    return <View>
        <TouchableOpacity  Style={Style.buttom}>
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
}


const Style = StyleSheet.create({
    buttom : {

    }
})


export default ScreenButtom