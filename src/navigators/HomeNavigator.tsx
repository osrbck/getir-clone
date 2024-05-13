import React from 'react'
import {Image,Text} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../screen/HomeScreen'
import CetegoryFilterScreen from '../screen/CategoryFilterScreen' 

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {backgroundColor:"#5C3EBC"},
              headerTitle: () => {
                <Image
                  source={require("../../assets/getirlogo.png")}
                  style={{width:70,height:30}}
                />
              }
            }}
        />

        <Stack.Screen 
            name="CategoryDetails"
            component={CetegoryFilterScreen}
            options={{
              headerTintColor: 'white',
              headerBackTitleVisible: false,
              headerStyle: {backgroundColor:"#5C3EBC"},
              headerTitle: () => {
                <Text style={{fontWeight:'bold', fontSize:16, color:'white'}}>
                  Ürünler
                </Text>
              }
            }}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator