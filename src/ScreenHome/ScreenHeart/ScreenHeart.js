import { View, Text, FlatList, } from 'react-native'
import React, { useState, useEffect } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Styles from './style'
import { RemoveItemAction } from '../../../redux/Action/AddLikeAction'
import ScreenItemCart from '../ScreenItemCart/ScreenItemCart'
import { useSelector, useDispatch } from 'react-redux'

const ScreenHeart = ({ navigation }) => {



    const dispatch = useDispatch()


    const [screenLike, setScreenLike] = useState(true)
    const [idRemove, setIdRemove] = useState(null)

    const linke = useSelector((state) => state.linke)
    const { addData } = linke




    useEffect(() => {

        if (idRemove) {

            return dispatch(RemoveItemAction(idRemove))

            // console.log('kommer',idRemove)

        }


        return () => {

            setIdRemove(null)
        }

    }, [idRemove])









    return <View style={Styles.container}>

        <View style={Styles.containerrow}>
            <Text style={Styles.containerrowtext}>The things you like</Text>
            <IonIcons
                name="heart-sharp"
                size={30}
                color={'#ff3b2f'}
                style={Styles.containerrowtexticon}
            />
        </View>



        <View style={Styles.row}>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 5,
                    paddingBottom: 5,
                }}
                numColumns={2}
                data={addData}
                renderItem={({ item }) => <ScreenItemCart
                    item={item}
                    screenLike={screenLike}
                    setIdRemove={setIdRemove}

                />}
                keyExtractor={item => item.product}
            />

        </View>









    </View>
}


export default ScreenHeart


