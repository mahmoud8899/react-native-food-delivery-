import React, { useEffect, useState } from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { getCategoryAction, paginationUserAction } from './redux/Action/Product_Action'
import { ViewsAllLike } from './redux/Action/AddLikeAction'
import CustomDrawerContentButtom from './src/Navigation/CustomDrawerContent'
LogBox.ignoreAllLogs(true)


const App = () => {



  const dispatch = useDispatch()

  






  useEffect(() => {


    dispatch(ViewsAllLike())
    dispatch(getCategoryAction())
    dispatch(paginationUserAction())



  }, [dispatch])







  return <NavigationContainer>
    <CustomDrawerContentButtom />
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </NavigationContainer>


}

export default App



/*
import ButtomNavigation from './src/Navigation/ButtomNavigation'

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(ActionTypes.KEYTOKEN)
        return jsonValue != null ? dispatch(AddTokenAddUser(JSON.parse(jsonValue))) : null;
      } catch (e) {
        // error reading value
      }
    }
    getData()







    return () => {
      getData()

    }

*/
