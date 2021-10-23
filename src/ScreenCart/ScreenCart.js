import React from 'react'
import { View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native'
import Styles from "./style"
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/Action/CartAction'
import IonIcon from 'react-native-vector-icons/Ionicons'
import ScreenCartItem from './ScreenCartItem/ScreenCartItem'
import ScreenEmptyCart from './ScrrenEmptyCart/ScrrenEmptyCart'




const ScreenCart = (props) => {

    const { navigation } = props

    const dispatch = useDispatch()

    const dataCart = useSelector((state) => state.dataCart)






    // amount all prisc...
    const Totel = Number(dataCart?.reduce((acc, cx) => acc + cx.prics, 0).toFixed(2))


    // remove item cart..
    const AddToRemove = (data) => {

        return dispatch(removeFromCart(data))
        // console.log(data)
    }


    return (
        <View style={Styles.container}>


            {!dataCart?.length > 0 ?


                <ScreenEmptyCart />

                :
                <View>

                    <Pressable onPress={() => navigation.navigate('Home')} style={Styles.cartrowicons}>
                        <IonIcon
                            name="chevron-back-sharp"
                            size={30}
                            color={'#ff3b2f'}
                            style={Styles.cartrowiconsiCONS}

                        />
                    </Pressable>

                    <View style={Styles.cartrow}>
                        <Text style={Styles.carttext}>my cart</Text>
                    </View>


                    <View style={Styles.cartList}>
                        <FlatList
                            data={dataCart}
                            renderItem={({ item }) =>
                                <ScreenCartItem
                                    item={item}
                                    AddToRemove={AddToRemove}
                                />}
                            keyExtractor={item => item._id}

                        />

                    </View>




                    <View style={Styles.buttom}>
                        <View style={Styles.total}>

                            <Text style={Styles.totaltext}>Total Amount</Text>
                            <Text style={[Styles.totaltext, { color: 'red' }]}>${Totel}</Text>

                        </View>


                        <TouchableOpacity style={Styles.buttomnext}>

                            <Text style={Styles.buttomnextcolor}>Place Order</Text>
                            <IonIcon
                                name="arrow-forward-sharp"
                                size={30}
                                color={'white'}
                                style={Styles.buttomnextcoloricon}
                            />


                        </TouchableOpacity>


                    </View>








                </View>


            }











        </View>
    )
}


export default ScreenCart


/*
                    <View style={Styles.rowItemCart}>










                    </View>



                    <View style={Styles.button}>
                        <View>
                            <Text style={Styles.text}>total ${Totel}</Text>
                        </View>

                        <Pressable onPress={() => dispatch(clearCart())}>
                            <Text style={Styles.text}>cleaning</Text>
                        </Pressable>

                        <Pressable style={Styles.buttonClick} onPress={() => navigation.navigate('CheckOut')}>
                            <Text style={Styles.buttonClicktext}>check ut</Text>
                        </Pressable>

                    </View>
*/