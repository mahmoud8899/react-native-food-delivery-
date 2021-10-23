import React, { useEffect, useState } from "react"
import { View, Text, Image, ScrollView, FlatList, TextInput, ActivityIndicator } from "react-native"
import Styles from "./style"
import Icon from "react-native-vector-icons/FontAwesome5"
import { useDispatch, useSelector } from "react-redux"
import ListProducts from "./ListProducts"
import NavigationAdmin from "./NavigationAdmin"
import { AllProductAction } from "../../../redux/Action/Product_Action"


const ScreenListProduct = ({ navigation }) => {

    const dispatch = useDispatch()

    const [dataProducct, setDataProducct] = useState([])
    // all products..
    const Allproduct = useSelector((state) => state.Allproduct)
    const { products, loading } = Allproduct


    // userInfo... 
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin



    // delete product...... 
    const productDelet = useSelector((state) => state.productDelet)
    const { deleteProduct } = productDelet



    useEffect(() => {

        if (deleteProduct) {
          return  dispatch(AllProductAction())
           
            
        }

    }, [deleteProduct])



    // console.log('user',userInfo.token)


    useEffect(() => {

        if (products) {
            setDataProducct(products)
        }


        return () => {
            setDataProducct([])
        }

    }, [products])

    // set search product 
    const SearchProduct = (text) => {

        setDataProducct(dataProducct.filter((i) => i.name.toLowerCase().includes(text.toLowerCase())))


    }







    return (
        <View style={Styles.continer}>

            <NavigationAdmin navigation={navigation} />


            <View style={Styles.search}>

                <TextInput
                    placeholder={'Search'}
                    style={Styles.input}
                    onChangeText={(text) => SearchProduct(text)}

                />
                <Icon name="search" size={20} style={Styles.iconsInput} color={'#2196f3'} />

            </View>





            <View style={Styles.ListCart}>

                {loading ? <ActivityIndicator size="large" color={'#2196f3'} style={{ justifyContent: 'center' }} /> :
                    <FlatList
                        data={dataProducct}
                        renderItem={({ item, index }) => <ListProducts navigation={navigation} item={item} />}
                        keyExtractor={item => item._id}

                    />
                }


            </View>


        </View>
    )
}


export default ScreenListProduct