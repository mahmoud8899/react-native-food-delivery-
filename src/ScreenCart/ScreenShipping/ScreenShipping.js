import React, { useState } from "react"
import { View, Text, Pressable, FlatList, Image } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Input from "../../Middlare/Input"
import Styles from "./style"
import Icons from "react-native-vector-icons/FontAwesome5"
import { useSelector } from "react-redux"

const CartList = ({ item, AddToRemove }) => {

    return <View style={Styles.cart} key={item._id}>
        <Image source={{ uri: `http://192.168.0.138:8000${item.image[0]}` }}
            style={Styles.image}
        />
        <Text style={Styles.text}>{item.name}</Text>

        <View style={Styles.price}>
            <Text style={Styles.pricetext}>${item.prics}</Text>
        </View>
        <Pressable style={Styles.remove} onPress={() => AddToRemove(item)}>
            <Icons name="trash-alt" size={20} color={'#ff3b2f'} style={Styles.removeicons} />

        </Pressable>
    </View>
}


const ScreenShipping = ({ navigation }) => {


    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const dataCart = useSelector((state) => state.dataCart)

    const [isAddres, setIsAddres] = useState(true)

    const [order, setOrder] = useState([])




    const HandleAddAddres = () => {


        const order = {
            fullName,
            address,
            email,
            city,
            zipCode,
            phone,
            dataCart,
        }


        //return console.log(order)

       return navigation.navigate('Payment', { order })


    }


    const AddToRemove = () => { }


    return (
        <KeyboardAwareScrollView>

            {isAddres ?
                (
                    <View style={Styles.containerPayment}>

                        <View style={Styles.infoAddress}>
                            <FlatList
                                data={dataCart}
                                renderItem={({ item }) => <CartList
                                    item={item}
                                    AddToRemove={AddToRemove}
                                />}
                                keyExtractor={item => item.name}

                            />
                        </View>




                        <View style={Styles.infoAddress}>
                            <Text style={Styles.addres}>Your Address</Text>
                            <View style={Styles.flexAddress}>
                                <Text style={Styles.flexAddresstext}>mahmoud talata</Text>
                                <Text style={Styles.flexAddresstext}>mahmoud.talata@gmail.com</Text>
                                <Text style={Styles.flexAddresstext}>mahmoud iox 20D</Text>
                                <Text style={Styles.flexAddresstext}>Uppsala</Text>
                                <Text style={Styles.flexAddresstext}>24o4 03</Text>
                            </View>

                            <Pressable style={Styles.editButton} onPress={() => setIsAddres(false)}>
                                <Text style={Styles.buttontext}>Edit</Text>
                                <Icons name="edit" size={20} color={'white'} />
                            </Pressable>





                        </View>


                        <Pressable style={Styles.buttonClick} onPress={HandleAddAddres}>
                            <Text style={Styles.buttonClicktext}>Payment</Text>
                        </Pressable>


                    </View>
                ) : <>

                    <View style={Styles.container}>
                        <View style={Styles.edit} >
                            <Text style={Styles.editAddress}>Add Your Addresss....</Text>
                            <Icons name="edit" size={20} color={'#ff3b2f'} />
                        </View>




                        <View style={Styles.conatinerInput}>
                            <Input
                                placeholder={'FullName'}
                                name={'fullName'}
                                value={fullName}
                                onChangeText={(text) => setFullName(text)}


                            />
                            <Input
                                placeholder={'Your email'}
                                name={'email'}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Input
                                placeholder={'Your Address'}
                                name={'address'}
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                            />
                            <Input
                                placeholder={'City'}
                                name={'City'}
                                value={city}
                                onChangeText={(text) => setCity(text)}
                            />
                            <Input
                                placeholder={'Zip Code'}
                                name={'zipCode'}
                                value={zipCode}
                                onChangeText={(text) => setZipCode(text)}
                            />
                            <Input
                                placeholder={'Your Phone'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => setPhone(text)}
                                name={'Phone'}
                                value={phone}
                            />

                        </View>






                    </View>
                    <Pressable style={Styles.buttonClick} onPress={HandleAddAddres}>
                        <Text style={Styles.buttonClicktext}>Add Address</Text>
                    </Pressable>



                </>}


        </KeyboardAwareScrollView>
    )
}


export default ScreenShipping