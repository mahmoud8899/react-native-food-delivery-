

import { StyleSheet, Dimensions } from "react-native"
import { flexDirection } from "styled-system"

const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    containerPayment:{
        flex : 1,
        height : height / 1
    },
    container: {
        position: 'relative',

        flex: 1,
        height: height / 1
    },
    edit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 10,
    },

    editAddress: {

        fontSize: 25,

        color: '#ff3b2f'

    },

    conatinerInput: {
        marginHorizontal: 10,
        marginTop: 10,
        width: width / 1 - 20,

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

        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal : 10,
        position : 'absolute',
        right : 0,
        bottom : 200,
       

    },
    buttonClicktext: {
        color: 'white',
        backgroundColor: '#ff3b2f',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        width: width / 3,
        height: 50,
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 16,
       
       
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

    infoAddress:{
        backgroundColor : 'white',
        marginTop : 10,
        marginHorizontal : 5,
        overflow : 'hidden',
        borderRadius : 10,
        padding : 4,
        
    },

    flexAddress:{
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap'
    },
    flexAddresstext:{
        fontSize : 17,
        textTransform : 'capitalize',
        fontWeight : '400',
        marginLeft : 10,
    },
    addres:{
        textTransform : 'capitalize',
        textAlign : 'center',
        fontSize : 20,
        marginBottom : 5,
        color :  '#ff3b2f',
    },
    editButton:{
        backgroundColor :  '#ff3b2f',
       flexDirection : 'row',
       alignItems : 'center',
       justifyContent : 'center',
       padding : 10,
       width : 100,
       marginLeft : 'auto',
       borderRadius : 10,
       marginBottom : 10,

    },
    buttontext:{
        color  : 'white',
        fontSize : 17,
        fontWeight : '500',
        marginRight : 5,
    }


})


export default Styles