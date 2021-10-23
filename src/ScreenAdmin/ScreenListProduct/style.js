

import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    continer: {
        flex: 1,
        height: height / 1,
        backgroundColor: 'white'
    },
    row: {

        marginHorizontal: 10,
        marginTop: 30,
        backgroundColor: '#f7f7f7',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
        borderWidth: 1,
        overflow: 'hidden',
        flexWrap: 'wrap',
        borderColor: '#2196f3'
    },

    slider: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        overflow: 'hidden',
        width: 190,
        margin: 3,
    },
    sliderText: {
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 4,
    },

    ListCart: {
        marginHorizontal: 10,
        marginTop: 30,
        borderRadius: 10,
        padding: 5,
        borderWidth: 3,
        borderColor: '#eee',

        overflow: 'hidden',
        height: height / 1.8
    },

    cart: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        padding: 5,
        borderRadius: 6,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    search: {
        marginHorizontal: 10,
        marginTop: 30,
        borderRadius: 10,
        padding: 5,


        overflow: 'hidden',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    input: {
        backgroundColor: '#eee',
        fontSize: 18,
        fontWeight: '400',
        paddingLeft: 40,
        width: width / 1 - 20,
        borderRadius: 10,
        borderColor: 'white'
    },
    iconsInput: {
        position: 'absolute',
        left: 10,
        zIndex: 2,
    }
})


export default Styles