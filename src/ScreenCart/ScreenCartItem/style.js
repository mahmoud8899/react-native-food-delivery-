import { StyleSheet, Dimensions } from 'react-native'



const { height, width } = Dimensions.get('window')

const Styles = StyleSheet.create({

    cart: {
        marginHorizontal: 10,
       
        flexDirection: 'row',
        borderBottomColor: '#f3f5f8',
        borderBottomWidth: 1,
        overflow: 'hidden',
        marginTop :5,
        marginBottom: 5,
        

    },

    dow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        width: 200,
        marginTop: 20,
    },
    conatinerimage:{
        width : 100,
        height : 100,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
       
       
    },
    name: {
        marginLeft: 20,

    },
    text: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: '400'
    },
    pricetext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ff3b2f'
    },

    remove: {
        marginLeft: 'auto',
        borderRadius : 10,
        width : 40,
        height : 40,
        backgroundColor : '#F3F5F89C',
        justifyContent : 'center',
        alignItems : 'center',
       
        right : 5,
       
    }
})

/*
#f3f5f8,
'#ff3b2f'

*/
export default Styles