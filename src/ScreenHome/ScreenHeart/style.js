

import { StyleSheet, Dimensions } from "react-native"
import { backgroundColor } from "styled-system"

const { width, height } = Dimensions.get('window')
/*
#f3f5f8,
'#ff3b2f'
        marginHorizontal: 10,
        marginTop: 10,
        width: width / 1 - 20,
        
        borderBottomRightRadius : 50,
       borderRightColor : '#ff3b2f',
       borderRightWidth : 1,
       borderLeftColor : '#ff3b2f',
       borderBottomColor : '#ff3b2f',
       borderTopColor : '#ff3b2f',
       borderBottomWidth : 1,
       borderTopWidth : 1,
       borderLeftWidth : 1
*/
const Styles = StyleSheet.create({

    container: {
        flex: 1,
       
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
       


    },
    containerrow:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    containerrowtext:{
        textTransform : 'capitalize',
        fontSize : 20,
        fontWeight : '400'
    },
    containerrowtexticon:{
        marginLeft : 10,
    },
    row:{
        flexDirection : 'row',
        marginHorizontal : 10,
    }


})


export default Styles