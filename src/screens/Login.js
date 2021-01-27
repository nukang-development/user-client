import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Image, StyleSheet, View} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title } from 'native-base';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setToken, setIdUser} from '../stores/actions/tukangAction'

export default function Login() {
  const dispatch = useDispatch()
  const [userId, setId] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword] = useState('')
  const [isReady, setReady] = useState(false)
  const navigation = useNavigation()
//192.168.1.7:
  useEffect(() => {
    Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
    })
    .then(_ => {
        AsyncStorage.getItem('namaKey')
        setReady(true)
    })
  }, [])

  function login() {
    
    const payload = {
      email: email,
      password: password
    }
    console.log(payload)
    axios({
      method: 'POST',
      url: 'http://54.255.251.4/user/login',
      data: payload
    })
    .then(({data}) => {
      console.log('masuk login')
      setId(data.id)
      dispatch(setIdUser({id: data.id, email: email}))
      dispatch(setToken(data.access_token))
      return AsyncStorage.setItem('access_token', data.access_token)
    })
    .then (_ => {
      navigation.navigate('Dashboard', {
        email, id: userId
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  function toRegister() {
    navigation.navigate('Register')
  }
  
  if(isReady) {
    return (
      <Container style={{backgroundColor: '#f9e0ae'}}>
          <Image source={{uri: "https://i.imgur.com/LomHlsY.png"}} 
            style={{
              flex: 1,
              resizeMode: 'contain',
              backgroundColor: '#f9e0ae',
              maxHeight: 200,
            }}
          />
        <View style={styles.container}>
          <Form style={{paddingLeft:20, paddingRight:20}}>
            <Item style={{marginTop:20}} stackedLabel>
              <Label style={{color: 'white', fontWeight:'bold'}}>Email</Label>
              <Input style={{color: 'white', fontWeight: '100'}} placeholder="Insert your email"
              value={email}
              onChangeText={(text) => setEmail(text)}/>
            </Item>
            <Item style={{marginTop:20}} stackedLabel >
              <Label style={{color: 'white', fontWeight:'bold'}}>Password</Label>
              <Input style={{color: 'white', fontWeight: '100'}} placeholder="Insert your password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}/>
            </Item>
              <Button style={{ width:'100%', marginTop:50, borderTopStartRadius:30, backgroundColor: '#c24914'}}block dark>
                <Text onPress={login}>Login</Text>
              </Button>
              <Button style={{ width:'100%', marginTop:20, borderBottomEndRadius: 30, backgroundColor: '#fc8621'}}block success>
                <Text onPress={toRegister}>Sign Up</Text>
              </Button>
          </Form>
        </View>
      </Container>
    )
  } else {
    return (
        <Container>
            <Text>Loading..</Text>
        </Container>
    )
  }
  
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#682c0e',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 50,
    paddingBottom: 68

  }


})