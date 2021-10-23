import React from "react"
import { View, Text, FlatList,Image } from "react-native"
import { AddAdesss ,cunstNmae } from "../../Middlare/Middlare"
import Styles from "./style"

const OrderItem = ({ item }) => {

    return <View key={item._id} style={Styles.item}>

        <View>
            <Image source={{ uri: `http://192.168.0.138:8000${item.image[0]}` }}  style={Styles.image} />
        </View>
        <Text style={Styles.sizetext}>{item.name}</Text>
        <Text style={Styles.sizetext}> ${item.prics}</Text>
        
       
    </View>
}
const CartAddress = ({ item }) => {
    return <View key={item.name}>
        <Text style={Styles.sizetextitem}>Full name : {item.name}</Text>
        <Text style={Styles.sizetextitem}>Your Address :{item.adress}</Text>
        <Text style={Styles.sizetextitem}>City :{item.city}</Text>
        <Text style={Styles.sizetextitem}>Zip Cid :{item.zipCode}</Text>
        <Text style={Styles.sizetextitem}>Phone : +{item.phone}</Text>
    </View>
}
const ScreenConfirm = ({ route }) => {




    const order = route?.params?.itemorder?.order?.dataCart

    //console.log(order)
    //console.log('AddAdesss', AddAdesss)


    return <View style={Styles.container}>



        <View>
            <Text style={Styles.Confirm}>Confirm Your Order...</Text>
        </View>





        <View style={Styles.cart}>
        <FlatList
                data={order}
                renderItem={({ item }) => <OrderItem item={item} />}
                keyExtractor={item => item._id}
            />


           <View style={Styles.address}>
           <FlatList
                data={AddAdesss}
                renderItem={({ item }) => <CartAddress item={item} />}
                keyExtractor={item => item.name}
            />
           </View>
        </View>


    </View>
}


export default ScreenConfirm