import React, { useState, useRef, useEffect } from "react"
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Pressable,
    ActivityIndicator,
} from "react-native"
import Styles from "./style"
import { Picker } from '@react-native-picker/picker'
import Icon from "react-native-vector-icons/FontAwesome5"
import NavigationAdmin from "../ScreenListProduct/NavigationAdmin"
import ImagePicker from "react-native-image-crop-picker"
import { useSelector, useDispatch } from "react-redux"
import { productCreateAction, UpdateProductAction } from "../../../redux/Action/Product_Action"
import Toast from "react-native-toast-message"
const ScreenFormProduct = ({ navigation, route }) => {






    const dispatch = useDispatch()
    // all categor...
    const ALLcategory = useSelector((state) => state.ALLcategory)
    const { category: categoryReduc } = ALLcategory


    // user Info... 
    const updateProductID = useSelector((state) => state.updateProductID)
    const { updateProduct, loading: loadingUpdateProduct } = updateProductID



    // create product
    const createPro = useSelector((state) => state.createPro)
    const { createProduct, error, loading } = createPro






    const [name, setName] = useState('')
    const [prics, setPrics] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [image, setImage] = useState('')
    const [item, setItem] = useState(null)


   // console.log('data', image)


    useEffect(() => {

        if (!route.params) {
            return setItem(null)
        } else {

            setItem(route.params.item)
            setName(route.params.item.name)
            setPrics(route.params.item.prics)
            setDescription(route.params.item.description)
            setCategory(route.params.item.category._id)
            setCountInStock(route.params.item?.countInStock)
            setImage(route.params.item.image[0])
            return
        }

    }, [item, route])



    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }





    const HandleUpload = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            setImage(image.path)
        }).catch((error) => {
            return alert(error)
        })
    }




    const HandleCreateProduct = () => {


        if (name === '' || prics === '' || description === '' || countInStock === '' || category === '') {

            return alert('input are Empty.....')
        }





        if (item) {
            //    const nowForm = new FormData()


            const user = {
                _id: item._id,
                name: name,
                prics: prics,
                description: description,
                category: category,
                countInStock: countInStock,
                image: image
            }


            return dispatch(UpdateProductAction(user))

        } else {
            const ImageData = new FormData()

            if (image) {
                ImageData.append('image', {
                    uri: image,
                    name: 'imag.jpg',
                    fileName: 'image',
                    type: 'image/jpg'
                })
            }

            ImageData.append('name', name)
            ImageData.append('prics', prics)

            ImageData.append('category', category)
            ImageData.append('countInStock', countInStock)
            ImageData.append('description', description)

            return dispatch(productCreateAction(ImageData))
        }






    }




    // set success and error....
    useEffect(() => {

        if (createProduct && updateProduct) {
            Toast.show({
                topOffset: 60,
                type: "success",
                text1: updateProduct ? 'Update product' : "success",
                text2: ""
            });
            setTimeout(() => {
                // return navigation.navigate("ScreenListProduct");
            }, 500)
        } else {
            if (error) {
                return Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1: `${error}`,
                    text2: ""
                });
            }
        }

    }, [createProduct, updateProduct, error])








    return (
        <View style={Styles.continer}>



            <NavigationAdmin navigation={navigation} />



            {loading || loadingUpdateProduct ? <ActivityIndicator size="large" color={'#2196f3'} style={{ justifyContent: 'center' }} /> :
                <ScrollView>

                    <View style={Styles.search}>
                        <Text style={Styles.text}>Create Product..</Text>
                    </View>


                    <View style={Styles.search}>

                        {item?.image[0] ?
                            <Image source={{ uri: `http://192.168.0.138:8000${image}` }} style={Styles.image} />
                            : <Image source={{ uri: image }} style={Styles.image} />
                        }

                        <Pressable onPress={HandleUpload}>
                            <Icon name="plus" size={26} style={Styles.searchicons} color={'#2196f3'} />
                        </Pressable>
                    </View>


                    <View style={Styles.search}>
                        <TextInput
                            placeholder="name"
                            style={Styles.input}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            onSubmitEditing={HandleCreateProduct}
                        />
                        <TextInput
                            placeholder="prics"
                            style={Styles.input}

                            onChangeText={(text) => setPrics(text)}
                            keyboardType='numeric'
                            value={`${prics}`}
                            onSubmitEditing={HandleCreateProduct}

                        />

                        <TextInput
                            placeholder="description"
                            style={Styles.input}
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                            onSubmitEditing={HandleCreateProduct}
                        />

                        <TextInput
                            placeholder="countInStock"
                            style={Styles.input}
                            value={`${countInStock}`}
                            onChangeText={(text) => setCountInStock(text)}
                            keyboardType='numeric'
                            onSubmitEditing={HandleCreateProduct}
                        />

                    </View>
                    <View style={Styles.searchPick}>

                        <Picker

                            ref={pickerRef}
                            selectedValue={`${category}`}
                            onValueChange={(itemValue, itemIndex) =>
                                setCategory(itemValue)
                            }>
                            {categoryReduc?.map((x) => {
                                return <Picker.Item key={x._id} label={x.name} value={x._id} />
                            })}


                        </Picker>
                    </View>


                    <Pressable style={Styles.search} onPress={HandleCreateProduct}>
                        <Text style={Styles.searchtext}>Create Product</Text>
                    </Pressable>



                </ScrollView>
            }
        </View>
    )
}


export default ScreenFormProduct

/*



        const ImageData = new FormData()
        ImageData.append('image', {
            uri: image,
            name: 'imag.jpg',
            fileName: 'image',
            type: 'image/jpg'
        })




        console.log(name, prics, quantity, description, countInStock, ImageData)

*/