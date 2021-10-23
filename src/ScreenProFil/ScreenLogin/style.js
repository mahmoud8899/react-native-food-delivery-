

import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({

    HandleError: {
        marginTop: 10,
        marginBottom: 20,
        padding: 0,
    },
    TEXT: {
        flex: 1,
        height: height / 1,
        backgroundColor: 'white',
        

    },
    Image : {
       
        overflow : 'hidden',
        marginTop : 10,
      
    },rowImage:{
        width : width / 1 - 20,
        height : height / 5,
        borderRadius : 10,
        borderColor : 'white',
        borderWidth : 1,
    },
    conatiner: {

        marginHorizontal: 10,
        marginTop: 20,



    },





    Input: {

        marginTop: 20,

    },












    loginButton: {
        color: 'white',
        backgroundColor: '#ff3b2f',
        textAlign: 'center',
        height: 50,
        borderRadius: 10,
        fontSize: 20,
        lineHeight: 50,
        marginTop: 50,
    },

    Sing: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        fontWeight: '300',
        textTransform: 'capitalize',
    },




    row: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        overflow: 'hidden'
    },

    rowtext: {
        fontSize: 20,
    },



    isValid: {
        color: 'white',
        backgroundColor: '#FF392F86',
        textAlign: 'center',
        height: 50,
        borderRadius: 10,
        fontSize: 20,
        lineHeight: 50,
        marginTop: 50,
    },




})
/*
#f3f5f8,
'#ff3b2f'

*/

export default Styles