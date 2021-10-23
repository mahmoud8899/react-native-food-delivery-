import { StyleSheet, Dimensions } from "react-native"
const { width } = Dimensions.get('window')




const Styles = StyleSheet.create({

    container: {

        padding: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#f3f5f8',
        borderColor: '#ff3b2f',
        borderWidth: 1,
        borderRadius: 30,
        width : 160,

    },


    Icons: {
        marginLeft: 'auto',
        top: -10

    },
    Iconsnot:{
      backgroundColor : 'red'
    },

    image: {
        width: 190,
        height: 170,
        borderBottomRightRadius: 100,
        borderColor: '#ff3b2f',
        borderWidth: 1,
         margin : 0,
        
        borderTopLeftRadius:30 ,
        borderTopRightRadius : 30,
      
        
    },
    heart: {


    },
    name: {


        marginHorizontal: 10,

    },
    text: {
        color: '#ff3b2f',
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'capitalize',
        margin: 2,


    }, textcolor: {

        color: '#B6B2B1',
        fontSize: 17,

        textTransform: 'capitalize',
        margin: 2,
    }, textprice: {
        color: '#ff3b2f',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        margin: 2,
    },

    buttom: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',



    }, buttomtext: {
        backgroundColor: '#FF392FB6',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        padding: 10,
        borderRadius: 10,
        lineHeight: 20,
        fontSize: 18,
        borderRadius: 50,

    },
    Add: {
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '400',

    },
    rating: {
        marginTop: 10,
    }

})


/*
#f3f5f8,
'#ff3b2f'

*/

export default Styles