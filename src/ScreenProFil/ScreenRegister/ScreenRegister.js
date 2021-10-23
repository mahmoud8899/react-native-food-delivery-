import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Styles from './style'
import Input from '../../Middlare/Input'
import ScreenLoginWithother from '../ScreenLoginWithother/ScreenLoginWithother'
import { Validate } from '../../Middlare/Validate'
import ScreenLoginWelcome from '../ScreenLoginWelcome/ScreenLoginWelcome'
import { UserSingUpAction } from '../../../redux/Action/AuthUser'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import HandleError from '../../Middlare/Error'
const ScreenRegister = (props) => {

    const { navigation } = props


    const dispatch = useDispatch()

    // user Info
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const [userName, setUserName] = useState({ value: '', isValid: false, Touch: false })
    const [email, setEmail] = useState({ value: '', isValid: false, Touch: false })
    const [password, setPassword] = useState({ value: '', isValid: false, Touch: false })



    const UpdateUserName = value => {
        setUserName({
            value,
            isValid: Validate(value, [{ key: 'isUsername' }]),
            Touch: true
        })
    }
    const UpdatePassword = value => {
        setPassword({
            value,
            isValid: Validate(value, [{ key: 'IsPassword' }]),
            Touch: true
        })
    }

    const UpdateEmail = value => {
        setEmail({
            value,
            isValid: Validate(value, [{ key: 'isEmail' }]),
            Touch: true
        })
    }


    const SubmitHandle = () => {
        if (!email.isValid || !password.isValid || !userName.isValid) {

            return alert(
                !email.isValid && 'write your Email..',
                !password.isValid && 'Password not match...',
                !userName.isValid && 'username.....'
            )
        }


        const user = {
            email: email.value,
            password: password.value,
            username: userName.value
        }


        return dispatch(UserSingUpAction(user))
        //  return console.log('dxxxxxx',user)
    }



    // return login
    const returnLogin = () => {
        return navigation.navigate('Login')
    }



    useEffect(() => {

        if (userInfo && userInfo?.username) {

            return console.log('yes....', userInfo)
        }

    }, [userInfo])


    return (
        <View style={Styles.conatiner}>
            <View style={Styles.content}>
                {loading ? <ActivityIndicator size='large' color={'#ff3b2f'} /> :

                    <ScrollView>
                        <ScreenLoginWelcome title={'Sing Up'} />

                         
                    {error ?
                        <View style={Styles.HandleError} >

                            <HandleError error={error} />
                        </View>
                        : null}

                        <View style={Styles.Input}>
                            <Input
                                placeholder={'FullName'}
                                onChangeText={UpdateUserName}
                                Touch={userName.Touch}
                                validation={!userName.isValid}
                                value={userName.value}
                                name={userName.value}
                                onSubmitEditing={SubmitHandle}

                            />
                            <Input
                                placeholder={'Email Address'}
                                onChangeText={UpdateEmail}
                                Touch={email.Touch}
                                validation={!email.isValid}
                                value={email.value}
                                name={email.value}
                                onSubmitEditing={SubmitHandle}


                            />
                            <Input
                                placeholder={'Password'}
                                secureTextEntry={true}
                                onChangeText={UpdatePassword}
                                Touch={password.Touch}
                                validation={!password.isValid}
                                value={password.value}
                                name={password.value}
                                onSubmitEditing={SubmitHandle}
                            />

                        </View>




                        <TouchableOpacity
                            disabled={!email.isValid || !password.isValid || !userName.isValid}
                            onPress={SubmitHandle}

                        >
                            <Text style={[
                                !email.isValid || !password.isValid || !userName.isValid ?
                                    Styles.isValid
                                    :
                                    Styles.loginButton]}>Sing Up</Text>
                        </TouchableOpacity>






                        <TouchableOpacity onPress={returnLogin}>
                            <Text style={Styles.Sing}>If you have an account, you can log in</Text>
                        </TouchableOpacity>



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






                        <ScreenLoginWithother googleWidth />










                    </ScrollView>


                }


            </View>

        </View>

    )
}

export default ScreenRegister