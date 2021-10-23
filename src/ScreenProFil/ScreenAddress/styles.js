import { StyleSheet, Dimensions } from "react-native"

const setGet = Dimensions.get('screen')
const Styles = StyleSheet.create({

    containerFirst : {
      margin : 50,
      flexDirection : 'row',
      marginHorizontal : 10,
      alignItems : 'center'
    },

    Icons:{
      backgroundColor : '#f3f6fa',
      width : 40,
      height : 40,
      borderRadius : 50,
      lineHeight : 40,
      textAlign : 'center',
      color : 'black'
    },
    scroll:{

        height : 300,
       
        

    },
    profile:{
        marginLeft : 80,
        fontSize : 20,
        fontWeight : '400',

    },

    container : {
        flex : 1,
        backgroundColor : 'white',
        height : setGet.height / 1

    },

    form:{
        marginHorizontal : 20,
        margin : 10,
       
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent  : 'flex-start',
    },
    formtext : {
        width :100,
        fontWeight : 'bold',
        fontSize: 17,
        color : '#ff3b2f'
        
    },
    formInput:{
        backgroundColor : '#f3f6fa',
        width : setGet.width / 1.5,
        fontSize : 18,
        borderWidth :1,
        borderColor :'#eee',
        borderRadius : 15,
        paddingLeft : 20,
    },

    buttom:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,

    },
    buttomtext:{
        backgroundColor :'#ff3b2f',
        padding : 10,
        color : 'white',
        width : 200,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 10,
        
    }
   


})
/*
color : ''#d8d5d5'
*/

export default Styles