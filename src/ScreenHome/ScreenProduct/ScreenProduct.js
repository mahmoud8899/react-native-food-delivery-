import { View, Text, Image, ScrollView, Pressable, TouchableOpacity, ActivityIndicator, } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './style'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons'
import ScreenPeoductPhoto from './ScreenPeoductPhoto'
import ScreenRating from '../ScreenRating/ScreenRating'
import ScreenCurrent from '../../Middlare/Current'
import { Url } from '../../Middlare/Middlare'
import { useDispatch, useSelector } from 'react-redux'
import { ProductIDAction } from '../../../redux/Action/Product_Action'
import COLORS from '../../Middlare/Color'


const ScreenProduct = (props) => {

    const { route, navigation } = props

    const item = route.params.item



    const dispatch = useDispatch()


    const productID = useSelector(state => state.productID)
    const { loading, error, product } = productID











    const [imageSetActive, setImageSetActive] = useState('')
    const [curent, setCurent] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)
    const [uploadingZomImage, setUploadingZomImage] = useState('')





    useEffect(() => {

        if (item) {

           return setImageSetActive(item.image[0])
        }



        return () =>{
            setImageSetActive('')
        }

    

    }, [item])




    // view photo ... 
    const HandlOpenPhoto = (im) => {
        setUploadingZomImage(im)
        return setModalVisible(true)
    }



    return (
        <View style={Styles.container} key={item._id}>

            {loading ? <ActivityIndicator size="large" color={COLORS.firstColor} />
                :
                <>


                    {!modalVisible ?
                        <ScrollView>

                            <View style={Styles.containerImage}>
                                <View style={Styles.width}>
                                    <TouchableOpacity onPress={() => HandlOpenPhoto(imageSetActive)}>
                                        <Image

                                            source={{ uri: `${Url}${imageSetActive}` }}
                                            style={Styles.image}
                                        />

                                    </TouchableOpacity>

                                    <Pressable style={Styles.containericons} onPress={() => navigation.navigate('PageHome')}>
                                        <Icons name="chevron-left" size={22} color={'#ff3b2f'} />
                                    </Pressable>
                                    <Pressable style={Styles.heart} onPress={() => navigation.navigate('PageHome')}>
                                        <Icon name="heart-outline" size={30} color={'#ff3b2f'} />
                                    </Pressable>


                                    <View style={Styles.container_Image}>

                                        {item?.image?.map((imageIndex, index) => (
                                            <Pressable
                                                key={index}
                                                onPress={() => setImageSetActive(imageIndex)}  >


                                                <Image
                                                    source={{ uri: `${Url}${imageIndex}` }}
                                                    style={
                                                        [Styles.container_ImageImage,
                                                        imageSetActive === imageIndex ? Styles.ActiveImage : Styles.container_ImageImage,


                                                        ]}
                                                />


                                            </Pressable>

                                        ))}



                                    </View>








                                </View>


                            </View>



                            <View style={Styles.nera}>


                                <ScreenCurrent
                                    curent={curent}
                                />

                                <View>
                                    <Text style={Styles.name}>{item.name}</Text>
                                    <Text style={Styles.text}>{item.description}</Text>
                                </View>

                                <View style={Styles.rating}>
                                    <ScreenRating value={item.rating} size={30} />

                                </View>


                                <View style={Styles.buttomcontainer}>
                                    <View>
                                        <Text style={Styles.price}>${item.prics}</Text>
                                    </View>

                                    <View style={Styles.buttom}>
                                        <Icons name="shopping-cart" size={20} color={'white'} style={{ marginLeft: 5, }} />
                                        <Text style={Styles.buttomtext}>Add to Cart</Text>
                                    </View>
                                </View>

                            </View>

                        </ScrollView>
                        :
                        <ScreenPeoductPhoto
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            uploadingZomImage={uploadingZomImage}
                            setUploadingZomImage={setUploadingZomImage}
                        />
                    }

                </>

            }
        </View>
    )
}


/*



*/

export default ScreenProduct