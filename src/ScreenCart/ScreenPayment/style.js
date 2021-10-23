

import { StyleSheet, Dimensions } from "react-native"
import { flexDirection, marginTop } from "styled-system"

const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    container:{
        flex : 1,
        height : height / 1,
        marginTop : 10,
        width : width /1 - 20,
        marginHorizontal : 10,
    },
    method: {

        flexDirection : 'row',
        justifyContent : 'center',
        marginBottom : 10,

    },methodTEXT:{
        color: '#ff3b2f',
        textTransform : 'capitalize',
        fontSize : 20,
        fontWeight : '400'
        
    },
    selectMethod:{
       
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        marginTop : 10,
        backgroundColor :'white',
        padding: 10,
        borderRadius : 10,
    },
    valueSelect:{
        marginLeft : 'auto',
        
        width : 30,
        height : 30,
        backgroundColor : '#eee',
        borderRadius: 50,
        overflow : 'hidden',
        borderColor : '#ff3b2f',
        borderWidth : 1,
    },
    valueSelectcolor:{
        backgroundColor : '#ff3b2f',
        lineHeight : 30,
        fontSize : 40,
    },
 

    editAddress: {

        fontSize: 25,

        color: '#ff3b2f'

    },

    selectMethodCart:{
    
       
        justifyContent : 'flex-start',
        marginTop : 10,
        backgroundColor :'white',
        padding: 10,
        borderRadius : 10,
    },
    input:{
        width : width / 1 - 40 ,
        backgroundColor : '#eee',
        borderRadius : 10,
        height : 50,
        fontSize: 20,
        borderWidth: 1,
        borderColor : 'white',
        marginTop : 12,
        paddingLeft : 20,
    },
    containerCvv:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    inputcvv:{
        width : width / 2.70 - 40 ,
        backgroundColor : '#eee',
        borderRadius : 10,
        height : 50,
        fontSize: 20,
        borderWidth: 1,
        borderColor : 'white',
        marginTop : 12,
        paddingLeft : 20,
    },


    buttompay : {
        justifyContent : 'flex-end',
        flexDirection : 'row',
        marginTop : 30,
      
    },
    pay:{
        backgroundColor : '#ff3b2f',
        width : 190,
        height : 50,
        borderColor : '#eee',
        borderWidth : 1,
        borderRadius : 10,
        textAlign : 'center',
        lineHeight : 50,
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold'
    }
  

})


export default Styles