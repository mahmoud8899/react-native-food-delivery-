import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome5"
import Styles from "./style"
const NavigationAdmin = ({ navigation }) => {


    return <View style={Styles.row}>

        <TouchableOpacity style={Styles.slider} onPress={() => navigation.navigate('ScreenListProduct')}>

            <Icon name="search" size={20} color={'#2196f3'}  style={{width : 40, textAlign :'center'}} />
            <Text style={Styles.sliderText}>List products</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.slider} onPress={() => navigation.navigate('ScreenListFormProduct')}>
        <Icon name="search" size={20} color={'#2196f3'}  style={{width : 40, textAlign :'center'}} />
            <Text style={Styles.sliderText}>Create Product</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.slider} onPress={() => navigation.navigate('ScreenCategory')}>
        <Icon name="search" size={20} color={'#2196f3'}  style={{width : 40, textAlign :'center'}} />
            <Text style={Styles.sliderText}>Create category</Text>
        </TouchableOpacity>


        <View style={Styles.slider}>
        <Icon name="search" size={20} color={'#2196f3'}  style={{width : 40, textAlign :'center'}} />
            <Text style={Styles.sliderText}>Orders</Text>
        </View>
    </View>
}


export default NavigationAdmin