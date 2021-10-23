import React, { useEffect, useState } from "react"
import { View, Text, TextInput, ScrollView, Image, Pressable, ActivityIndicator } from "react-native"
import NavigationAdmin from "../ScreenListProduct/NavigationAdmin"
import Styles from "./style"
import Icon from "react-native-vector-icons/FontAwesome5"
import ImagePicker from "react-native-image-crop-picker"
import Toast from "react-native-toast-message"
import { createCategoryAction } from "../../../redux/Action/Product_Action"
import { useDispatch, useSelector } from "react-redux"
import Url from "../../../redux/Url"

const ScreenCategory = ({ navigation }) => {

    const dispatch = useDispatch()
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [icon, setIcon] = useState('')


    const createCategoryID = useSelector((state) => state.createCategoryID)
    const { loading, error: errorCategory, Createcategory } = createCategoryID

    console.log('Createcategory', Createcategory)

    //   console.log('d',errorCategory)




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



    const Submit = () => {



        if (name === '' || color === '' || icon === '' || image === '') return alert('Input is Empty....')

        const DataCategory = new FormData()
        DataCategory.append('image', {
            uri: image,
            name: 'imag.jpg',
            fileName: 'image',
            type: 'image/jpg'
        })
        DataCategory.append('color', color)
        DataCategory.append('icon', icon)
        DataCategory.append('name', name)

        return dispatch(createCategoryAction(DataCategory))
    }


    useEffect(() => {

        if (errorCategory) return Toast.show({
            topOffset: 60,
            type: "error",
            text1: `${errorCategory}`,

        });

        if (Createcategory) return Toast.show({
            topOffset: 60,
            type: "success",
            text1: "create new Category",
            text2: ""

        });

    }, [errorCategory, Createcategory])

    return (
        <View style={Styles.continer}>
            <NavigationAdmin navigation={navigation} />

            {loading ? <ActivityIndicator size="large" color={'#2196f3'} /> :




                <ScrollView>
                    <View style={Styles.search}>

                        <Text style={Styles.text}>Create Category ...</Text>

                    </View>

                    <View style={Styles.search}>
                        {Createcategory?.image ?
                            <Image 
                            source={{ uri: `http://192.168.0.138:8000${Createcategory?.image}` }} style={Styles.image} />
                            :
                            <Image source={require('../../../data/image/uppsalamat/3.jpg')} style={Styles.image} />
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
                            onSubmitEditing={() => {
                                Submit()
                            }}
                        />
                        <TextInput
                            placeholder="color"
                            style={Styles.input}
                            value={color}
                            onChangeText={(text) => setColor(text)}
                            onSubmitEditing={() => {
                                Submit()
                            }}
                        />
                        <TextInput
                            placeholder="icon"
                            style={Styles.input}
                            value={icon}
                            onChangeText={(text) => setIcon(text)}
                            onSubmitEditing={() => {
                                Submit()
                            }}
                        />

                    </View>

                    <Pressable style={Styles.search} onPress={Submit}>
                        <Text style={Styles.searchtext}>Create Product</Text>
                    </Pressable>
                </ScrollView>
            }

        </View>
    )
}


export default ScreenCategory