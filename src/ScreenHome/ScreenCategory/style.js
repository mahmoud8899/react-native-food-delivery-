import { StyleSheet,Dimensions } from 'react-native'
import COLORS from '../../Middlare/Color'

const {width , height} = Dimensions.get('window')
const Styles = StyleSheet.create({

    ContainerCategory:{
        flexDirection : 'row'
    },

    categoryBox :{
        width : 100,
        overflow : 'hidden',
        margin : 5,
        borderRadius : 20,
        borderColor : COLORS.firstColor,
        borderWidth : 1,
        justifyContent : 'center',
        padding : 1,
       
    },
    image:{
        width : '100%',
        height : 80,
        borderRadius : 20,
      

    },categoryText:{
        textAlign : 'center',
        fontSize : 17,
        fontWeight : '300',
        textTransform : 'capitalize',
        marginTop : 10,
        marginBottom : 10,
    },


    ActivecategoryBox : {
        width : 100,
        overflow : 'hidden',
        margin : 5,
        borderRadius : 20,
        borderColor : COLORS.firstColor,
        borderWidth : 1,
        justifyContent : 'center',
        padding : 1,
      
        backgroundColor  :'#FF392FE0',
        opacity : 0.1
    },


















    scroll :{
        
        padding : 0,
        margin : 0,
        borderRadius : 4,
        overflow : 'hidden',
        flexDirection : 'row',
        
    },
    Container:{
        borderRadius  : 5,
        borderColor : COLORS.firstColor,
        borderWidth : 2,
        padding : 0,
        margin : 0 ,
        width : 100,
        margin : 3,
        overflow : 'hidden',
        justifyContent : 'center',
        alignItems : 'center'
   
    },

    ContainerImage:{
        width : 100,
        height : 50,
        margin : 0, 
        padding : 0,
        borderRadius: 10,

    },
    Containertext:{
        fontSize : 17,
        textTransform : 'capitalize',
        fontWeight : '300',

        
    },
    active:{
        backgroundColor : COLORS.firstColor,
        fontSize : 17,
        textTransform : 'capitalize',
        fontWeight : '300',
     
    },
 
    inActive: {
        borderRadius  : 5,
        borderColor : COLORS.firstColor,
        borderWidth : 2,
        padding : 0,
        margin : 0 ,
        width : 100,
        margin : 3,
        overflow : 'hidden',
        justifyContent : 'center',
        alignItems : 'center'
    
    }

})


export default Styles