import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Text, View } from 'react-native'
import { CardItem, Thumbnail, Left , Body} from 'native-base';
import { Home, Order } from '../components'

export default function Dashboard({ navigation, route }) {

  const Tab = createMaterialTopTabNavigator();
  const { email, password } = route.params
  
  return (
    <>
      <View >
        <CardItem style={{marginTop:10}}>
          <Left>
            <Thumbnail source={{uri: 'https://www.wowkeren.com/display/images/photo/2019/10/09/00277245.jpg'}} />
            <Body style={{marginLeft:20}}>
              <Text>BABANG ARIEL</Text>
              <Text note>{email}</Text>
            </Body>
          </Left>
        </CardItem>
      </View>
      <Tab.Navigator style={{marginTop:10}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
    </>
  )
}