








import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {View, Image, Text, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import ButtomNavigation from './ButtomNavigation'
import COLORS from '../Middlare/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerScreenContainer = ({children}) => {
  const isDrawerOpen = useDrawerStatus();
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'red',
        borderRadius,
        transform: [{scale}],
        overflow: 'hidden',
      }}>
      <StatusBar
        backgroundColor={isDrawerOpen == 'open' ? COLORS.primary : COLORS.white}
        barStyle="dark-content"
      />
      {children}
    </Animated.View>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      style={{
        paddingVertical: 30,
      }}>
      <View
        style={{
          marginLeft: 20,
          marginVertical: 40,
        }}>
        <Image
          source={require('../../data/image/uppsalamat/7.jpg')}
          style={{height: 70, width: 70, borderRadius: 20}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 13,
            marginTop: 10,
          }}>
          JANE GARY
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const CustomDrawerContentButtom = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 500,
          backgroundColor: 'white',
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'black',
        drawerItemStyle: {backgroundColor: null},
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomePost"
        options={{
          title: 'ADOPTION',
          drawerIcon: ({color}) => (
            <Icon name="paw" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <ButtomNavigation {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="DONATION"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="gift" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <ButtomNavigation {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="ADD PET"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="plus-box" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <ButtomNavigation {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="FAVOURITES"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="heart" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <ButtomNavigation {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="PROFILE"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="account" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <ButtomNavigation {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default CustomDrawerContentButtom;


/*

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  return (


    <Drawer.Navigator initialRouteName="ScrrenHomer"  >
      <Drawer.Screen name="ScreenTest" component={ButtomNavigation} options={{ headerShown: false,}} />
    </Drawer.Navigator>



  );
}

*/