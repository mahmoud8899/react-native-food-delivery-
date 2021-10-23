import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Image, ActivityIndicator, ImageBackground } from 'react-native'
import Styles from './style'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Input from '../../Middlare/Input'
import Toast from 'react-native-toast-message'
import { UserLoginAction } from '../../../redux/Action/AuthUser'
import { useDispatch, useSelector } from 'react-redux'
import HandleError from '../../Middlare/Error'
import ScreenLoginWithother from '../ScreenLoginWithother/ScreenLoginWithother'
import { Validate } from '../../Middlare/Validate'
import ScreenForgotPassword from '../ScreenForgotPassword/ScreenForgotPassword'
import { useEffect } from 'react'
import ScreenLoginWelcome from '../ScreenLoginWelcome/ScreenLoginWelcome.js'
const ScreenLogin = (props) => {

    const { navigation } = props

    const dispatch = useDispatch()

    // user info....
    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const [email, setEmail] = useState({
        value: '',
        isValid: false,
        Touch: true
    })

    const [password, setPassword] = useState({
        value: '',
        isValid: false,
        Touch: true
    })


    useEffect(() => {

        if (userInfo && userInfo?.username) {

           return navigation.navigate('Profil')

          //  return console.log('yes... coming data...', userInfo)

        }

    }, [userInfo, navigation])







    // validation password...
    const UpdateInput = input => {

        setPassword({
            value: input,
            isValid: Validate(input, [{ key: 'IsPassword' }]),
            Touch: true
        })

    }
    // validation email...
    const UpdateInputemail = input => {

        setEmail({
            value: input,
            isValid: Validate(input, [{ key: 'isEmail' }]),
            Touch: true
        })

    }



    // submit email and password.................>
    const SubmitHandle = () => {

        if (!email.isValid || !password.isValid) {

            return alert(!email.isValid ? 'email' : 'password')
        }

        const user = {
            email: email.value,
            password: password.value
        }


        return dispatch(UserLoginAction(user))




    }
    return (
        <ImageBackground style={Styles.TEXT}  >


            <ScrollView>

                <View style={Styles.conatiner} >









                    <ScreenLoginWithother />

                    <ScreenLoginWelcome title={'Login'} />


                    {error ?
                        <View style={Styles.HandleError} >

                            <HandleError error={error} />
                        </View>
                        : null}



                    <View style={Styles.Image}>
                        <Image style={Styles.rowImage} source={require('../../../data/image/uppsalamat/9.jpg')} />
                    </View>


                    {loading ? <ActivityIndicator size="large" color={'#ff3b2f'} />
                        :

                        <View style={Styles.Input}>

                            <Input
                                placeholder={'Email Address'}
                                value={email.value}
                                onChangeText={UpdateInputemail}
                                onSubmitEditing={SubmitHandle}
                                Touch={email.Touch}
                                placeholderTextColor={'#ff3b2f'}
                                validation={!email.isValid}


                            />
                            <Input
                                placeholder={'Password'}
                                secureTextEntry={true}
                                value={password.value}
                                Touch={password.Touch}
                                onChangeText={UpdateInput}
                                onSubmitEditing={SubmitHandle}
                                placeholderTextColor={'#ff3b2f'}
                                validation={!password.isValid}

                            />

                        </View>

                    }


                    <ScreenForgotPassword />

                    <Pressable
                        onPress={SubmitHandle}
                        returnKeyLabel="send"
                        disabled={!email.isValid || !password.isValid}



                    >
                        <Text style={[
                            !email.isValid || !password.isValid ?
                                Styles.isValid
                                :
                                Styles.loginButton
                        ]}>Log in</Text>
                    </Pressable>






                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text style={Styles.Sing}>Don it an account ?Sing up</Text>
                    </Pressable>



                    <View style={Styles.row}>
                        <View>
                            <Text style={Styles.rowtext}>__________________</Text>
                        </View>

                        <View>
                            <Text style={Styles.rowtext}>OR</Text>
                        </View>


                        <View>
                            <Text style={Styles.rowtext}>__________________</Text>
                        </View>

                    </View>









                </View>
            </ScrollView>

        </ImageBackground>










    )
}

export default ScreenLogin


/*

  <ActivityIndicator size="large" />

  if (email === '' || password === '') {
            return Toast.show({

                type: 'success',
                text1: 'Empty ...',
                text2: 'Empty Input..... 👋',

            });
        }



        //  return console.log(email, password)

        return dispatch(UserLoginAction({ email, password }))
*/