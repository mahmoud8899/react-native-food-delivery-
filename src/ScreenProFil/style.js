import { StyleSheet, Dimensions } from "react-native"
/*
#f3f5f8,
'#ff3b2f'

*/
const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({


    login: {

        flexDirection : 'row',
        
        marginTop : 20,
        marginHorizontal : 10,
        alignItems : 'center',
        justifyContent : 'center',
        height : height / 1
    },
    logintext:{
      fontSize : 20,
      textTransform : 'capitalize'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: height / 1

    },
    containerFirst: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        height: 150,
    },



    logout: {
        flexDirection: 'row',
        alignItems: 'center'
    },


    profile: {

        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: '500'

    },

    containerFirstIcons: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: '#eee',
        borderWidth: 2
    },
    containerFirstIconsIcons: {
        lineHeight: 45,
        textAlign: 'center',
        color: '#d8d5d5'
    },
    row: {
        backgroundColor: 'white',
        width: width / 1,
        height: height / 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderWidth: 2,
        borderColor: '#eee'
    },


    uploadimage: {

        position: 'relative',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: width / 2.7,

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -30,
        borderWidth: 2,
        borderColor: '#eee'
    },
    rowIcons: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#ffff',
        lineHeight: 30,
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        bottom: 10,
        opacity: 1,
        color: 'black',
        borderColor: '#eee',
        borderWidth: 1,

    },

    input: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',

        marginTop: 30,
    },
    inputFirst: {
        width: 60,
        height: 70,
        borderRadius: 20,
        borderColor: '#eee',
        borderWidth: 1,

    },
    inputFirsticons: {
        lineHeight: 70,
        textAlign: 'center'
    },
    inputOnth: {
        marginLeft: 30,
    },
    inputOnthsize: {
        fontSize: 17,
        textTransform: 'capitalize',
        fontWeight: '400'
    },
    inputLast: {
        marginLeft: 'auto'
    },
    inputLasticons: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#f3f6fa',
        lineHeight: 40,
        textAlign: 'center',

        color: '#d8d5d5',
    }


})
/*
color : ''#d8d5d5'
*/

export default Styles