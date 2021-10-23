import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import COLORS from '../../Middlare/Color'


const ScreenLoginWelcome = (props) => {

    const { title } = props




    return <View style={Styles.iconsLogin}>

       
        <Text style={Styles.iconsLogintext}>
        {title}  With Uppsala Mat 

        </Text>
        <Icons 
        name="utensils"
         size={20} 
         
         style={Styles.icons}
         />



    </View>
}


const Styles = StyleSheet.create({
    iconsLogin: {

        backgroundColor : '#FF392F9D',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        marginTop : 5,
        borderRadius : 5,
     

    },
    iconsLogintext: {

        fontSize: 17,
        borderRadius: 10,
        width: 300,
        textAlign: 'center',
        color: '#fff',
        height: 50,
        lineHeight: 50,
    },
    icons:{

        backgroundColor : COLORS.lastColor,
        borderRadius : 20,
        padding  : 10,
       
        justifyContent: 'center',
        alignItems : 'center',
       
      
    }
})

export default ScreenLoginWelcome