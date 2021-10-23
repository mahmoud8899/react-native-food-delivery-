

import { StyleSheet, Dimensions } from "react-native"
import { backgroundColor } from "styled-system"

const { width, height } = Dimensions.get('window')
/*
#f3f5f8,
'#ff3b2f'
        marginHorizontal: 10,
        marginTop: 10,
        width: width / 1 - 20,
        
        borderBottomRightRadius : 50,
       borderRightColor : '#ff3b2f',
       borderRightWidth : 1,
       borderLeftColor : '#ff3b2f',
       borderBottomColor : '#ff3b2f',
       borderTopColor : '#ff3b2f',
       borderBottomWidth : 1,
       borderTopWidth : 1,
       borderLeftWidth : 1
*/
const Styles = StyleSheet.create({

    container: {
        flex: 1,
        height: height / 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'


    },
    containerImage: {

       
        backgroundColor: '#f3f5f8',
        height: height / 1.8,
        
        overflow: 'hidden',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
      
       width : width / 1 

    },
    width: {
   
     padding : 0,
     margin : 0,
    



    },
    image: {
        width: 'auto',
        height: 300,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 20,
        borderWidth: 1,
        opacity: 0.8

    },
    container_Image: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 5,
      
    
        
        overflow : 'hidden'
    }, container_ImageImage: {
       width : 100,
        height: 80,
        borderRadius: 10,
        borderColor: '#ff3b2f',
        borderWidth: 1,
        marginLeft : 2,
    },


    curent: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
    curentroute: {
        width: 50,
        height: 50,
        backgroundColor: '#f3f5f8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor : '#ff3b2f',
        borderWidth : 1
    },
    curenttext: {
        width: 50,
        alignItems: 'center'
    },
    curenttextfont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff3b2f',
    },



    containericons: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#f3f5f8',
        borderRightColor: 'white',
        borderRadius: 15,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heart: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#f3f5f8',
        borderRightColor: 'white',
        borderRadius: 15,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    rating: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        width: width / 1 - 20,
        padding: 0,
        marginTop: 10,
    },

    nera: {
        flex: 1,
        alignItems: 'center',

        height: height / 2 - 20,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'white'
    },
    name: {
        marginHorizontal: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 0,
        color: '#ff3b2f'

    },
    text: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: 20,
        marginTop: 5,
        marginBottom: 0,

    },
    buttomcontainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: width / 1 - 20,
        marginHorizontal: 10,
        marginTop: 20,

        margin: 0,
        padding: 0


    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#ff3b2f',
    },
    buttom: {

        backgroundColor: '#ff3b2f',
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        height: 50,
        borderRadius: 10,


    }, buttomtext: {
        fontWeight: '500',
        fontSize: 18,
        textTransform: 'capitalize',
        marginLeft: 10,
        color: 'white'
    },


    ActiveImage: {
        opacity: 0.3
    },


    fullImage :{
        width : width / 1 - 20,
        height : height / 1.2 - 20,
        marginHorizontal : 10,
        borderRadius : 10,
        borderColor : '#f3f5f8',
        borderWidth : 1
    }




})


export default Styles