import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Input from '../../Middlare/Input'
import IonIcon from 'react-native-vector-icons/Ionicons'



const ScreenForgotPassword = () => {



    const [forGot, setForGot] = useState(true)


   // console.log('forGot', forGot)



    return <View>
        {forGot ?

            <TouchableOpacity onPress={() => setForGot(false)}>
                <Text style={Style.forgot}>Forgot Password ?</Text>
            </TouchableOpacity> :
            <View>

                <Modal
                    animationType="slide"

                >
                    <ScrollView>
                       <View style={Style.Container}>
                       <Pressable onPress={() => setForGot(true)}>
                            <IonIcon name="arrow-back-outline" size={30} />
                        </Pressable>

                        <Image
                            source={require('../../../data/image/forgot.jpg')}
                            style={Style.image}
                        />



                        <View style={Style.emailAddress}>
                            <IonIcon name="mail-outline" color={'#ff3b2f'} size={30}  style={Style.emailAddressICON} />
            
                            <Text style={[Style.buttom, { color: '#000', textAlign: 'auto' }]}>Email Address</Text>
                        </View>



                      <View >
                      <Input
                            placeholder="Your Email"
                            placeholderTextColor="#ff3b2f"
                           
                        />

                          </View>


                        <TouchableOpacity style={Style.Containerbuttom}>

                            <Text style={Style.buttom}> Send a Code</Text>

                            <IonIcon name="send-outline" color={'#fff'} style={{ marginLeft: 20 }} size={20} />

                        </TouchableOpacity>
                       </View>
                    </ScrollView>

                </Modal>
            </View>




        }

    </View>
}


const { width, height } = Dimensions.get('window')

const Style = StyleSheet.create({
    Container: {
        flex : 1,
        
       
    },
    forgot: {
        color: '#ff3b2f',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10,
        textTransform: 'capitalize',
        marginLeft: 10,

    },
  
    image: {
        backgroundColor: 'red',
        width: width / 1,
        height: height / 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    emailAddress: {
        marginHorizontal: 10,
        marginTop: 40,
        marginBottom: 10,
        flexDirection : 'row',
        alignItems : 'center'
       
    },
    emailAddressICON:{
        marginRight  : 10,
    },
    Containerbuttom: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3b2f',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 20,
        marginTop: 30,
        
    },


    buttom: {

        color: 'white',
        textAlign: 'center',
        fontSize: 20,



    }



})



export default ScreenForgotPassword