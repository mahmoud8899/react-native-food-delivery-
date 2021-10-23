

import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

const Styles = StyleSheet.create({

    container: {
        overflow: 'hidden',
        margin: 0,
        backgroundColor: 'white',
        flex: 1,
        position: 'relative',
       

        

    },
    cartList:{
       
        height : height / 2.5,
      
        
    },
    remove: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'white',
        borderColor : '#eee',
        borderWidth : 2,
    },
    removeicons:{
        lineHeight : 37,
        textAlign : 'center'
    },
    rowItemCart: {
        width: width / 1 - 20,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#f9f9f9',
        height: height / 1.8 - 20,
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 2,
        padding: 3,
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#ff3b2f',
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
        borderColor: '#ff3b2f',
        borderWidth: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#ff3b2f',
        marginLeft: 20,
    },
    price: {
        marginLeft: 'auto',
    }, pricetext: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#ff3b2f',
        marginRight: 20,
    },


    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',

        width: width / 1 - 20,
        marginHorizontal: 10,
        position: 'absolute',
        bottom: 60,

    },
    buttonClick: {
        backgroundColor: '#ff3b2f',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        width: width / 3,
        height: 50,

    },
    buttonClicktext: {
        color: 'white',
        lineHeight: 50,
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'capitalize',
        alignItems: 'center',
        marginLeft: 30,
    },


    imageCart: {
        width: width / 1 - 60,
        height: height / 2,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    cartrowicons: {
        width : 50,
        height : 50,
        borderRadius : 20,
        backgroundColor : '#f3f5f8',
        marginHorizontal : 10,
        marginTop  : 20,

    },cartrowiconsiCONS:{
        lineHeight : 50,
        textAlign : 'center'
    },

    cartrow:{
        
        marginHorizontal : 10,
        marginTop : 20,
        marginBottom : 20,
     
        
        
    },carttext:{
        fontSize : 30,
        textTransform : 'capitalize',
        fontWeight : '500',
        color : '#ff3b2f'
    }
,
buttom:{
        
    marginHorizontal : 10,
    marginTop : 20,
    marginBottom : 20,
   
 
    
    
},
total :{
    flexDirection : 'row',
    justifyContent : 'space-between', 
    marginTop : 10,
},
totaltext:{
    fontWeight : '400',
    fontSize: 30,
    textTransform : 'capitalize'
},

buttomnext : {
    backgroundColor : '#ff3b2f',
    flexDirection : 'row',
    height : 60,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20,
},
buttomnextcolor:{
    color  :'white',
    fontSize : 20,
    textTransform : 'capitalize',
    fontWeight : '400'
},
buttomnextcoloricon:{
    marginLeft :10,
   
}



})


export default Styles