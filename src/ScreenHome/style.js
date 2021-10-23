

import { StyleSheet, Dimensions } from "react-native"

const { width ,height } = Dimensions.get('window')
const Styles = StyleSheet.create({


    firstclass : {
         flex: 1, 
         backgroundColor: 'white',
    },
    conatiner: {  
       backgroundColor : 'red',
       marginHorizontal : 10,
       height : 100,
    },

    itemCart :{
        marginHorizontal : 10,
        height : height / 2.8,

    },
    containerFilter:{
        margin : 10,
        marginHorizontal : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    textFilter:{
        fontSize : 20,
        fontWeight : '500',
        textTransform : 'capitalize',
        marginLeft : 10,
    },

    imageFilter:{
        width : 60,
        height : 60,
        borderRadius : 10,
    },
    center :{
       justifyContent : 'center'

    },
    category:{
      

        marginHorizontal : 10,
       
    },

    text :{
        textAlign :'center',
        fontSize : 20,
        textTransform : 'capitalize',
        fontWeight : 'bold',
        justifyContent  : 'center'
    },
    XP:{
        height : height / 3 - 20,
        
    },
    banner:{
        marginHorizontal: 10,
        margin: 10,
        width: width / 1 - 20,
        
        height : height / 4 
    }

})
/*
  marginHorizontal: 10,
        marginTop: 0,
       borderBottomRightRadius : 50,
       borderRightColor : '#ff3b2f',
       borderRightWidth : 1,
       borderLeftColor : '#ff3b2f',
       borderBottomColor : '#ff3b2f',
       borderTopColor : '#ff3b2f',
       borderBottomWidth : 1,
       borderTopWidth : 1,
       borderLeftWidth : 1,
       overflow : 'hidden'
*/

export default Styles