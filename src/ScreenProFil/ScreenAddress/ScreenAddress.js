import React ,{ Fragment } from "react"
import { View, Text, Modal, TextInput, ScrollView,Pressable } from "react-native"
import Styles from "./styles"
import  Icons  from "react-native-vector-icons/FontAwesome5"


const ScreenAddress = ({ changeAddress, setChangeAddress }) => {



    return (



        <Fragment>
            {changeAddress ?
                <Modal animationType="slide">
                    <View style={Styles.container}>

                        <View style={Styles.containerFirst}>

                            <Pressable onPress={() => setChangeAddress(false)} >
                                <Icons name="chevron-left" size={20} style={Styles.Icons}   />
                            </Pressable>
                            <View>
                                <Text style={Styles.profile}>Add my Address ....</Text>
                            </View>
                            <Pressable style={Styles.containerFirstIcons} >
                               
                            </Pressable>

                        </View>

                        <ScrollView style={Styles.scroll}>

                            <View style={Styles.form}>
                                <Text style={Styles.formtext}>Full name :</Text>
                                <TextInput placeholder="Full name" style={Styles.formInput} />
                            </View>


                            <View style={Styles.form}>
                                <Text style={Styles.formtext}>Your Email :</Text>
                                <TextInput placeholder="Your Email" style={Styles.formInput} />
                            </View>

                            <View style={Styles.form}>
                                <Text style={Styles.formtext}>Your Address :</Text>
                                <TextInput placeholder="Your Address" style={Styles.formInput} />
                            </View>

                            <View style={Styles.form}>
                                <Text style={Styles.formtext}>City :</Text>
                                <TextInput placeholder="City" style={Styles.formInput} />
                            </View>

                            <View style={Styles.form}>
                                <Text style={Styles.formtext}>Zip cod :</Text>
                                <TextInput placeholder="Zip cod" style={Styles.formInput} />
                            </View>

                            <View style={Styles.form}>
                                <Text style={Styles.formtext}>Your Phone Number :</Text>
                                <TextInput placeholder="Phone Number" style={Styles.formInput} />
                            </View>



                        </ScrollView>


                        <View style={Styles.buttom}>
                            <Text style={Styles.buttomtext}>Save</Text>

                        </View>







                    </View>
                </Modal>

                : null}

        </Fragment>

    )
}


export default ScreenAddress