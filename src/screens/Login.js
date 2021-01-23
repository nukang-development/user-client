import React, { useState, Component } from 'react';
import { useNavigation } from '@react-navigation/native'
import {Alert} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title } from 'native-base';

export default function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword] = useState('')
  const navigation = useNavigation()

  function login() {
    if(!email || !password) {
      Alert.alert ('Email & password cannot be empty!')
    } else {
      navigation.navigate('Dashboard', {
        email: email,
        password: password
      })
    }
  }

  function toRegister() {
    navigation.navigate('Register')
  }
  
  return (
    <Container>
      <Header style={{backgroundColor: "#f8c291"}}>
        <Title style={{marginTop:10}}>Welcome To Nukang</Title>
      </Header>
      <Content>
        <Form style={{paddingLeft:20, paddingRight:20}}>
          <Item style={{marginTop:20}} stackedLabel>
            <Label>Email</Label>
            <Input placeholder="Insert your email"
            value={email}
            onChangeText={(text) => setEmail(text)}/>
          </Item>
          <Item style={{marginTop:20}} stackedLabel last>
            <Label>Password</Label>
            <Input placeholder="Insert your password"
            value={password}
            onChangeText={(text) => setPassword(text)}/>
          </Item>
          <Item style={{marginTop:20}}>
            <Button style={{ width:'100%'}}block dark>
              <Text onPress={login}>Login</Text>
            </Button>
          </Item>
          <Item style={{marginTop:20}}>
            <Button style={{ width:'100%'}}block success>
              <Text onPress={toRegister}>Register</Text>
            </Button>
          </Item>
        </Form>
      </Content>
    </Container>
  )
}