/**
 * @format
 */
 import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import React from "react"
import store from './redux/Store/index'

// connect with redux... 
const connect = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => connect);
