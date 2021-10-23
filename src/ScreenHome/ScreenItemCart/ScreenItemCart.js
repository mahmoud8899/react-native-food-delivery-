import { View, Image, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AddToCart } from '../../../redux/Action/CartAction'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import ScreenRating from "../ScreenRating/ScreenRating"
import { Url, LingthMax } from '../../Middlare/Middlare'
import { AddLineCartAction } from '../../../redux/Action/AddLikeAction'
import Styles from './style'




const ScreenItemCart = (props) => {


    const { item, navigation, screenLike, setIdRemove } = props




    const dispatch = useDispatch()


    const linke = useSelector((state) => state.linke)
    const { addData } = linke

    // console.log('hel',addData)



    // add cart...
    const AddToCartProduct = (data) => {
        return dispatch(AddToCart(data))
    }



    const AddLike = (data) => {

        //  console.log('add to async storage....', data)

        return dispatch(AddLineCartAction(data))
    }



    // console.log('id remove...', id)
    const RemoveLike = (id) => {
        return setIdRemove(id)
    }


    return (

      


            <Pressable
                key={screenLike === true ? item.product : item._id}
                style={Styles.container}


            >

                <TouchableOpacity onPress={() => navigation.navigate('Product', { item: item })}>
                    <Image source={{ uri: `${Url}${item.image[0]}` }} style={Styles.image}
                    />
                </TouchableOpacity>



                {screenLike === true ?
                    <TouchableOpacity onPress={() => RemoveLike(item.product)}>


                        <Icon name="trash-outline" size={35} color={'#ff3b2f'} style={{ marginLeft: 'auto', top: -10 }} />

                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => AddLike(item)}>


                        <Icon
                            name={addData?.find((x) => x?.product === item._id) ? "heart-sharp" : "heart-outline"}
                            size={35}
                            color={'#ff3b2f'}
                            style={Styles.Icons}
                        />

                    </TouchableOpacity>
                }






                <View style={Styles.name}>
                    <Text style={Styles.text}>{item.name}</Text>
                    <Text style={Styles.textcolor}>{LingthMax(item.description)}</Text>




                    <View style={Styles.rating}>
                        <ScreenRating value={item.rating} />
                    </View>




                </View>




                <View style={Styles.buttom}>
                    <Text style={Styles.textprice}>${item.prics}</Text>
                    <Pressable style={Styles.buttomtext}
                        onPress={() => AddToCartProduct(item)}
                    >
                        <Text style={Styles.Add}>
                            <Icon name="cart-outline" size={30} color={'white'} />
                        </Text>
                    </Pressable>
                </View>


            </Pressable>




    )
}


export default ScreenItemCart
/*
                {screenLike ?
                    <TouchableOpacity onPress={() => RemoveLike(item.product)}>


                        <Icon name="trash-outline" size={35} color={'#ff3b2f'} style={{ marginLeft: 'auto', top: -10 }} />

                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => AddLike(item)}>


                        <Icon
                            name={[addData.find((x) => x.product === item._id) ? "heart-sharp" : "heart-outline"]}
                            size={35}
                            color={'#ff3b2f'}
                            style={Styles.Icons}
                        />

                    </TouchableOpacity>
                }

*/