import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5'
import ScreenAddress from './ScreenAddress/ScreenAddress'
import Styles from './style'
import { AddRemoveUser } from '../../redux/Action/AuthUser'
import { useDispatch, useSelector } from 'react-redux'
import IonIcon from 'react-native-vector-icons/Ionicons'
const ScreenProFile = (props) => {

    const { navigation } = props

    const dispatch = useDispatch()


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    //console.log('user id', userInfo)



    /*
        useEffect(() => {

        if (userInfo?.username) {
            console.log('route....')

            
        }

    }, [userInfo,navigation])

    */




    const [changeAddress, setChangeAddress] = useState(false)
    return (
        <View style={Styles.container}>


            {userInfo?.username ?



                <>
                    <View style={Styles.containerFirst}>




                        <Pressable style={Styles.containerFirstIcons} onPress={() => navigation.navigate('Home')}>
                            <Icons name="times" size={22} style={Styles.containerFirstIconsIcons} />
                        </Pressable>

                        <View>
                            <Text style={Styles.profile}>my profile</Text>
                        </View>

                        <Pressable style={Styles.logout} onPress={() => dispatch(AddRemoveUser())}>
                            <Icons name="sign-out-alt" size={30} color={'red'} />
                            <Text> logout</Text>
                        </Pressable>

                    </View>

                    <View style={Styles.row}>


                        <View style={Styles.uploadimage}>

                            <Image
                                source={require('../../data/image/uppsalamat/1.jpg')}
                                style={Styles.image}
                            />
                            <Icons name="plus" size={16} style={Styles.rowIcons} />
                        </View>




                        <View style={Styles.profileInput}>

                            <ScrollView>

                                <View style={Styles.input}>

                                    <View style={Styles.inputFirst}>
                                        <Icons name="phone-alt" size={20} color={`#ff3b2f`} style={Styles.inputFirsticons} />
                                    </View>


                                    <View style={Styles.inputOnth}>
                                        <Text style={Styles.inputOnthsize}>Phone Number</Text>
                                        <Text style={Styles.inputOnthsize}>+ 94345 34 645 645</Text>

                                    </View>

                                    <View style={Styles.inputLast}>
                                        <Icons name="pencil-alt" size={17} style={Styles.inputLasticons} />
                                    </View>

                                </View>



                                <View style={Styles.input}>

                                    <View style={Styles.inputFirst}>
                                        <Icons name="envelope" size={20} color={`#ff3b2f`} style={Styles.inputFirsticons} />
                                    </View>


                                    <View style={Styles.inputOnth}>
                                        <Text style={Styles.inputOnthsize}>Email</Text>
                                        <Text style={Styles.inputOnthsize}>mahmoud@talat.com</Text>

                                    </View>

                                    <View style={Styles.inputLast}>
                                        <Icons name="pencil-alt" size={17} style={Styles.inputLasticons} />
                                    </View>

                                </View>





                                <View style={Styles.input}>

                                    <View style={Styles.inputFirst}>
                                        <Icons name="credit-card" size={20} color={`#ff3b2f`} style={Styles.inputFirsticons} />
                                    </View>


                                    <View style={Styles.inputOnth}>
                                        <Text style={Styles.inputOnthsize}>Payment Methods</Text>
                                        <Text style={Styles.inputOnthsize}>Credit card, Apple pay</Text>

                                    </View>

                                    <View style={Styles.inputLast}>
                                        <Icons name="pencil-alt" size={17} style={Styles.inputLasticons} />
                                    </View>

                                </View>





                                <Pressable style={Styles.input} onPress={() => setChangeAddress(true)}>

                                    <View style={Styles.inputFirst}>
                                        <Icons name="shipping-fast" size={20} color={`#ff3b2f`} style={Styles.inputFirsticons} />
                                    </View>


                                    <View style={Styles.inputOnth} >
                                        <Text style={Styles.inputOnthsize}>Address</Text>
                                        <Text style={Styles.inputOnthsize}>3720 filbert dr, Daniesville</Text>

                                    </View>

                                    <View style={Styles.inputLast}>
                                        <Icons name="pencil-alt" size={17} style={Styles.inputLasticons} />
                                    </View>

                                </Pressable>





                            </ScrollView>


                        </View>





                    </View>


                    <ScreenAddress
                        changeAddress={changeAddress}
                        setChangeAddress={setChangeAddress}
                    />



                </>

                :
                <View>
                    <TouchableOpacity style={Styles.login}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={[Styles.logintext, { color: '#ff3b2f', fontWeight: 'bold' }]}>You</Text>
                        <Text style={Styles.logintext} > can log in from here</Text>
                        <IonIcon
                            name="log-in-outline"
                            size={50}
                            color={'#ff3b2f'}
                            style={{ marginLeft: 20 }}
                        />
                    </TouchableOpacity>

                </View>


            }






        </View>

    )
}

export default ScreenProFile