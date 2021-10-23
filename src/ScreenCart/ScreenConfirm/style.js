

import { StyleSheet, Dimensions } from "react-native"


const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 1,
        marginTop: 10,
        width: width / 1 - 20,
        marginHorizontal: 10,

    },
    address:{
       marginTop  : 10,
    },
    Confirm: {
        color: '#ff3b2f',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cart: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop : 10,
    },
    sizetextitem:{
        fontSize :17,
        fontWeight : '300',
        textTransform : 'capitalize'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,

    },
    sizetext: {
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 30,
        textTransform : 'capitalize',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },

    pay: {
        backgroundColor: '#ff3b2f',
        width: 190,
        height: 50,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: 50,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }


})


export default Styles