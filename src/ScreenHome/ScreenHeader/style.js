import { StyleSheet, Dimensions } from 'react-native'
import COLORS from '../../Middlare/Color'
const { width } = Dimensions.get('window')

/*
 back : #f3f6fa
 buttom :  #ff3b2f
*/
const Styles = StyleSheet.create({

    Container: {
      
        marginHorizontal : 10,
        margin: 0,
        padding : 0,
    },

    row: {
        margin: 0,
        padding: 0,
        
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        
        marginBottom : 10,
        
    },
    textSearch: {
        
        padding : 0,
        margin : 0,
  },
    textfood:{
        fontSize : 30,
        textTransform : 'capitalize',
        fontWeight: 'bold',
        color : 'black',
        
    },textfoodontherr:{
        fontSize : 40,
        textTransform : 'capitalize',
        fontWeight: 'bold',
        color : COLORS.firstColor,
        opacity : 0.2
    },

    rowSlider:{
        width : 45,
        height: 45,
        borderRadius : 10,
        justifyContent : 'center',
        borderWidth : 1,
        borderColor : COLORS.firstColor,

    },rowSliderIcon: {
        textAlign : 'center',
        fontWeight : 'bold'
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 10,
        borderWidth : 2,
        borderColor : '#8f8c8c9e'

    },
   
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop :5,
        marginBottom : 10,
       
        
    },
    input: {
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        height : 50,
        paddingLeft: 50,
        borderWidth: 1,
        borderColor: '#fff',
        width: width / 1.2 - 20,
        backgroundColor : COLORS.lastColor,
       
    },
    searchfilter:{
        marginLeft : 'auto',
        backgroundColor: COLORS.firstColor,
      
        borderRadius : 10,
        width : 50,
        height : 50,
        borderColor : '#fff',
        borderWidth : 1
    },
    searchicons: {
        position: 'absolute',
        left: 15,
        zIndex: 222,
    },
    searchiconsrigth: {
        position: 'absolute',
        right: 10,
        zIndex: 222,
    }

})


export default Styles