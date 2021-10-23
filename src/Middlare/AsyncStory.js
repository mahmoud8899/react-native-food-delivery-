import React, { useState, useEffect } from "react"

import * as ActionTypes from '../../redux/Action/Types'
import AsyncStorage from "@react-native-async-storage/async-storage"



const AsyncStory = () => {

    const [current, setCrrent] = useState([])

    useEffect(() => {

        const addNumber = async () => {

            try {
                const value = await AsyncStorage.getItem(ActionTypes.STORY_LINE_ITEM);
                if (value !== null) {
                    // We have data!!
                    setCrrent(JSON.parse(value))

                    console.log(JSON.parse(value))
                }
            } catch (error) {
                // Error retrieving data
            }

        }

        addNumber()



        return () => {
            addNumber()
            setCrrent([])
        }


    }, [])







}


export default AsyncStory