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
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 5,
        borderWidth: 3,
        borderColor: '#eee',
        overflow: 'hidden',
    },

    slider: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        borderRadius: 5,
        overflow: 'hidden'
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
        backgroundColor: '#f7f7f7',
        padding: 5,
        borderRadius: 6,
    },
    image: {
        width: 400,
        height: 200,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 2,
    },
    searchicons: {
        backgroundColor: '#f7f7f7',
        height: 50,
        width: 50,
        borderRadius: 50,
        lineHeight: 50,
        textAlign: 'center',
        top: -25,
        borderColor: 'white',
        borderWidth: 2,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    search: {
        marginHorizontal: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 5,
        overflow: 'hidden',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    input: {
        backgroundColor: '#f7f7f7',
        fontSize: 18,
        fontWeight: '400',
        paddingLeft: 10,
        width: width / 1 - 20,
        borderRadius: 10,
        borderColor: 'white',
        marginBottom: 5,
        marginTop: 5,
    },
    iconsInput: {
        position: 'absolute',
        left: 10,
        zIndex: 2,
    },

    searchPick: {
        marginHorizontal: 10,
        marginTop: 0,
        borderRadius: 10,
        padding: 0,
        backgroundColor: '#f7f7f7',
        overflow: 'hidden',
        marginBottom: 10,



    },
    searchtext: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        color: 'white',
        fontSize: 17,
        fontWeight: '500'
    }
})


export default Styles