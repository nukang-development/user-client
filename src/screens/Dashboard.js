import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { CardItem, Thumbnail, Left , Body, Container, Icon} from 'native-base';
import { Home, OrderList } from '../components'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {setProfile, setToken} from '../stores/actions/tukangAction'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const idUser = useSelector(state => state.tukangReducer.idUser)
  const Tab = createMaterialTopTabNavigator();
  
  const [profile, setProf] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('access_token')
    .then(token => {
      dispatch(setToken(token))
      console.log('>>>>>',idUser);
      return axios({
        method: "GET",
        url: `http://54.255.251.4/user/${idUser.id}`,
        headers: {access_token: token}
      })
    })
    .then(({data}) => {
      console.log('get data user');
      setProf(data)
      dispatch(setProfile(data))
    })
    .catch(err => console.log('WWW',err))
  }, [])
  
  return (
    <Container >
      <View >
        <CardItem style={{paddingTop:30, backgroundColor: '#fc8621', borderBottomRightRadius: 30}}>
          <Left>
            <Thumbnail source={{uri: 'https://image.freepik.com/free-vector/faceless-human-model-blank-dummy-part-male-female-body-isolated-background_1441-2248.jpg'}} />
            <Body style={{marginLeft:20}}>
              <Text style={{fontWeight:'bold'}}>{profile.name}</Text>
              <Text note>{idUser.email}</Text>
            </Body>
          </Left>
        </CardItem>
      </View>
      {
        profile ? <Container style={{ borderTopEndRadius: 30, borderTopStartRadius: 30}}>
                  <Tab.Navigator style={{ backgroundColor: '' }}
                    
                    screenOptions={({route}) => ({
                    
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        

                        if (route.name === 'Home') {
                          iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                        return <Icon style={{width: 100}} name={'home-outline'} size={3}/>;

                        } else if (route.name === 'Order List') {
                          iconName = focused ? 'ios-list-box' : 'ios-list';
                        return <Icon style={{width: 100}} name={'build-outline'} size={3}/>;

                        }

                      },
                    })}
                    tabBarOptions={{
                      showIcon:true,
                      showLabel:false,
                    }}
                  >
                    
                    <Tab.Screen   name="Home" component={Home} />
                    <Tab.Screen name="Order List" component={OrderList} />
                  </Tab.Navigator>
                  </Container>
                  :
                  <Text>Loading...</Text>
      }
      
    </Container>
  )
}