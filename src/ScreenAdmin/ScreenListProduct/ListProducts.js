import { View, Text, Image, Pressable } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome5"
import Styles from "./style"
import { LingthMax } from "../../Middlare/Middlare"
import { DeleteProductAction } from "../../../redux/Action/Product_Action"
import { useDispatch } from "react-redux"

const ListProducts = ({ item ,navigation }) => {


    const dispatch = useDispatch()


    return (
        <View style={Styles.cart} key={item._id}>
            <Text>{LingthMax(item._id)}</Text>
            <Image
                source={{ uri: `http://192.168.0.138:8000${item.image[0]}` }}
                style={Styles.image}
            />
            <Text style={Styles.sliderText}>{item.name}</Text>
            <Text style={Styles.sliderText}>{item.category.name}</Text>
            <Pressable onPress={() => navigation.navigate('ScreenListFormProduct',{ item})}>
                <Icon name="edit" size={20} style={Styles.iconsSlider} color={'#2196f3'} />
            </Pressable>
            <Pressable onPress={() => dispatch(DeleteProductAction(item._id))}>
                <Icon name="trash-alt" size={20} style={Styles.iconsSlider} color={'#2196f3'} />
            </Pressable>
        </View>
    )
}


export default ListProducts