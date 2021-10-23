import { StyleSheet } from 'react-native'
import COLORS from '../../Middlare/Color'


const Styles = StyleSheet.create({

    singUp: {

        justifyContent: 'center',


    },
    singUprOW: {
        marginTop: 5,
        borderRadius: 10,
        borderColor: COLORS.firstColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
    },
    loginGoogle: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        margin: 0,
    },
    singUprOWcolor: {
        
       flexDirection : 'row',
       alignItems : 'center',
       justifyContent : 'center'

    },
    google: {

        borderRadius: 10,
        borderColor: COLORS.lastColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
    },

    googleIcons: {
        backgroundColor:COLORS.lastColor,
        height: 40,
        width: 40,
        borderRadius: 50,
        lineHeight: 40,
        marginLeft: 5,
        textAlign: 'center'
    },
    googleText: {
        fontSize: 15,
        marginLeft: 5,
        textTransform: 'capitalize',
        marginLeft : 20,
        fontWeight : '300',
        fontSize : 17,
       
    },

    colorIcons: {
        backgroundColor: '#4285f4',
        marginLeft: 20,
        height: 40,
        width: 40,
        borderRadius: 50,
        lineHeight: 40,
        textAlign: 'center',
        marginLeft: 5,

    }
})




export default Styles
