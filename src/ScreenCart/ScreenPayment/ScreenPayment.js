import React, { useState } from "react"
import { View, Text, FlatList, Pressable } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { MethodCart } from "../../Middlare/Middlare"
import Styles from "./style"



const SelectMethod = ({ item, idValue, setIdValue }) => {
    return <Pressable
        key={item.id}
        style={Styles.selectMethod}
        onPress={() => setIdValue(item)}
    >
        <View>
            <Text style={Styles.methodTEXT}>{item.name}</Text>
        </View>
        <View style={Styles.valueSelect}>
            <Text style={idValue.id === item.id ? Styles.valueSelectcolor : null}></Text>

        </View>

    </Pressable>
}



const ScreenPayment = ({ route, navigation }) => {


    const [idValue, setIdValue] = useState('')
    const itemorder = route.params

  //  console.log(itemorder)









    return <View style={Styles.container}>
        <ScrollView>
            <View style={Styles.method}>
                <Text style={Styles.methodTEXT}> select Method </Text>
            </View>


            <View>
                <FlatList
                    data={MethodCart}
                    renderItem={({ item }) => <SelectMethod
                        item={item}
                        idValue={idValue}
                        setIdValue={setIdValue}

                    />}
                    keyExtractor={item => item.id}

                />




            </View>




            {idValue && idValue?.id?.toString() === '1' ? (

                <View style={Styles.selectMethodCart}>
                    <View>
                        <Text style={Styles.methodTEXT}> cart Paymet....</Text>
                    </View>

                    <View>
                        <TextInput placeholder="Full Name" style={Styles.input} />
                        <TextInput placeholder="Cart number" style={Styles.input} />


                        <View style={Styles.containerCvv}>
                            <TextInput placeholder="YY" style={Styles.inputcvv} />
                            <TextInput placeholder="MM" style={Styles.inputcvv} />
                            <TextInput placeholder="Cvv" style={Styles.inputcvv} />
                        </View>




                        <Pressable style={Styles.buttompay}
                            onPress={() => navigation.navigate('Confirm', { itemorder })}

                        >
                            <Text style={Styles.pay}>Pay</Text>
                        </Pressable>
                    </View>



                </View>

            ) : null}


        </ScrollView>

    </View>
}


export default ScreenPayment