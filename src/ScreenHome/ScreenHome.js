
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenHeader from './ScreenHeader/ScreenHeader'
import Styles from './style'
import ScreenItemCart from './ScreenItemCart/ScreenItemCart'
import { useDispatch, useSelector } from 'react-redux'
import {
    paginationUserAction,
    CategoryAndProductFilterAction
} from '../../redux/Action/Product_Action'
import ScreenCategory from './ScreenCategory/ScreenCategory'

const ScreenHome = (props) => {


    const { navigation } = props





    const [active, setActive] = useState()
    const [idProduct, setIdProduct] = useState('')

    const dispatch = useDispatch()

    // console.log('idProduct', idProduct)


    const ALLcategory = useSelector((state) => state.ALLcategory)
    const { category } = ALLcategory




    const paginationID = useSelector((state) => state.paginationID)
    const { home, loading } = paginationID

    const products = useSelector(state => state.paginationID?.categoryproduct[idProduct]) || []










    useEffect(() => {

        if (idProduct) {
            products.length === 0 && dispatch(CategoryAndProductFilterAction(idProduct))
        }





    }, [idProduct])















    // filter product....
    const filterChangeCategory = (catg) => {
        return catg === 'all' ? null : setActive(catg), setIdProduct(catg)
    }



    // more data....
    const MoreLoading = () => {
        //  console.log('more...')

        return dispatch(paginationUserAction())
    }







    // more category...
    const LoadingCategory = () => {
        //  console.log('more....category....')
        if (idProduct) return dispatch(CategoryAndProductFilterAction(idProduct))

    }



    return (
        <View style={Styles.firstclass}>




            <ScreenHeader />




            <View style={Styles.category}>
                <ScreenCategory
                    category={category}
                    active={active}
                    filterChangeCategory={filterChangeCategory}

                />
            </View>






            {loading ? <ActivityIndicator size="large" color={`#ff3b2f`} /> :

                <View style={Styles.itemCart} >




               
                <Text>DD</Text>




                </View>

            }
















        </View>
    )
}


export default ScreenHome
/*
     {idProduct ?



                        <FlatList
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop: 5,
                                paddingBottom: 5,
                            }}
                            numColumns={2}
                            data={products}
                            renderItem={({ item }) => <ScreenItemCart item={item} navigation={navigation} />}
                            keyExtractor={item => item._id}

                            onEndReached={LoadingCategory}
                            onEndReachedThreshold={0.5}


                        />

                        :

                        <FlatList
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop: 5,
                                paddingBottom: 5,
                            }}
                            numColumns={2}
                            data={home}
                            renderItem={({ item }) =>
                                <ScreenItemCart item={item} navigation={navigation} />
                            }
                            keyExtractor={item => item._id}
                            onEndReached={MoreLoading}
                            onEndReachedThreshold={0.5}



                        />

                    }

*/