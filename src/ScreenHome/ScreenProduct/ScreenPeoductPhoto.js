import { View, Image, Modal, TouchableOpacity } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import Styles from "./style"
import {Url} from '../../Middlare/Middlare'

const ScreenPeoductPhoto = ({
    modalVisible,
    setModalVisible,
    uploadingZomImage,
    setUploadingZomImage
}) => {



    const HandleCloseImageAndBack = () => {
        setUploadingZomImage('')
        return setModalVisible(false)
    }

    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >

                <TouchableOpacity onPress={HandleCloseImageAndBack}>
                    <Icon name="close-outline" size={40} />
                </TouchableOpacity>
                <Image
                    source={{ uri: `${Url}${uploadingZomImage}` }}
                    style={Styles.fullImage}
                />


            </Modal>

        </View>

    )
}


export default ScreenPeoductPhoto