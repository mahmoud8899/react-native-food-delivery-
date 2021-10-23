import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
const Input = (props) => {


    const {
        placeholder,
        name,
        id,
        value,
        autoCorrect,
        onChangeText,
        onFocus,
        secureTextEntry,
        keyboardType,
        onSubmitEditing,
        placeholderTextColor,
        validation,
        Touch,
        ...rest
    } = props
    return <View style={styles.conatiner}>
        <TextInput
            {...props}
            value={value}
            style={styles.input}

        />

        {!validation ?
            <IonIcon
                name="checkmark-outline"
                size={27}
                style={styles.IonIcon}
            />
            : null}





    </View>



}

const styles = StyleSheet.create({
    conatiner: {

        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'

    },
    input: {
        width: '98%',
        height: 60,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ff3b2f',
        paddingLeft: 10,
        fontSize: 20,
    },
    flexAddress: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    IonIcon: {
        position: 'absolute',
        right: 10,

        width: 30,
        height: 30,
        borderRadius: 50,
        textAlign: 'center',
        backgroundColor: '#ff3b2f',
        color: '#f3f5f8',
        lineHeight: 30,
    

    }
});
/*
#f3f5f8,
'#ff3b2f'

*/
export default Input;