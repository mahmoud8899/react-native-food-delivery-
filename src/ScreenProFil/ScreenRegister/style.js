

import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    HandleError: {
        marginTop: 10,
        marginBottom: 20,
        padding: 0,
    },
    conatiner: {


        flex: 1,
        height: height / 1,
        backgroundColor: 'white',
        height: height / 1

    },
    content: {
        marginHorizontal: 10,
    },

    iconsLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconsLogintext: {
        fontSize: 23,
        fontWeight: '400',
        color: '#ff3b2f'

    },

    Input: {

        marginTop: 50,
    },


    forgot: {
        color: '#ff3b2f',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10,
        textTransform: 'capitalize',
        marginLeft: 10,
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