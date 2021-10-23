import React from 'react'
import { View, Text } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Styles from './style'

const ScreenLoginWithother = () => {




    return <View style={Styles.singUp}>


        <View style={Styles.singUprOW}>
            <View style={Styles.singUprOWcolor}>
                <Icons name="google-plus-g" size={25} style={Styles.googleIcons} color={'#ff3b2f'} />
                <Text style={Styles.googleText} >Sign in with google</Text>
            </View>
        </View>


        <View style={Styles.singUprOW}>
            <View style={Styles.singUprOWcolor}>
                <Icons name="facebook-f" size={25} style={Styles.colorIcons} color={'#fff'} />
                <Text style={Styles.googleText} >Sign in with Facebook</Text>
            </View>
        </View>
    </View>
}



export default ScreenLoginWithother