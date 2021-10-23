
import { View, Text, Image, Pressable, TextInput, } from 'react-native'
import React from 'react'
import Styles from './style'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons'



const ScreenHeader = (props) => {


//    const { onFocusList, focus, CloseFocus, searchProduct ,navigation } = props

    return (

        <View>
            <View style={Styles.Container}>

                <View style={Styles.row} >

                    <Pressable style={Styles.rowSlider} onPress={()=>{}} >
                        <Icon name="reorder-two-outline"
                            size={35}
                            style={Styles.rowSliderIcon}
                            color={`#ff3b2f`} />
                    </Pressable>

                    <Image
                        source={require('../../../data/image/2.jpg')}
                        style={Styles.image}
                    />
                </View>

                <View style={Styles.textSearch}>
                    <Text style={Styles.textfood}>fast and </Text>
                    <Text style={Styles.textfoodontherr}>Delicios food  </Text>
                </View>

                <View style={Styles.search}>
                    <Icon
                        name="search"
                        size={27}
                        style={Styles.searchicons}
                        color={'#ff3b2f'}
                    />
                    <TextInput
                        placeholder="Search"

                        style={Styles.input}
                    />

                    <View style={Styles.searchfilter}>
                        <Icons name="sliders-h" size={20} color={`#fff`} style={{ textAlign: 'center', lineHeight: 45 }} />
                    </View>




                </View>

            </View>



        </View>

    )
}


export default ScreenHeader
