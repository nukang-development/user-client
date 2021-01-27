import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import {Image, ScrollView, StyleSheet} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title, View } from 'native-base';
import axios from 'axios'

export default function Register() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword] = useState('')
  const navigation = useNavigation()

  function toLogin() {
    
    const payload = {
      name: name,
      email: email,
      password: password
    }
    axios({
      method: 'POST',
      url: 'http://54.255.251.4/user/register',
      data: payload
    })
    .then(({data}) => {
      console.log('masukk', '<<<<<<<<<')
      navigation.navigate('Login')

    })
    .catch(err => {
      console.log(err)
    })
  }

  // http://192.168.43.82:3000/user/register

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
        <ScrollView style={{paddingBottom:20}}>
          <Form style={{paddingLeft:20, paddingRight:20}}>
          <Item style={{marginTop:20}} stackedLabel>
              <Label style={{color: 'white', fontWeight:'bold'}} >Name</Label>
              <Input style={{color: 'white', fontWeight: '100'}}  placeholder="Insert your name"
              value={name}
              onChangeText={(text) => setName(text)}/>
            </Item>
            <Item style={{marginTop:20}} stackedLabel>
              <Label style={{color: 'white', fontWeight:'bold'}}>Email</Label>
              <Input style={{color: 'white', fontWeight: '100'}} placeholder="Insert your email"
              value={email}
              onChangeText={(text) => setEmail(text)}/>
            </Item>
            <Item style={{marginTop:20}} stackedLabel last>
              <Label style={{color: 'white', fontWeight:'bold'}}>Password</Label>
              <Input secureTextEntry={true} style={{color: 'white', fontWeight: '100'}} placeholder="Insert your password"
              value={password}
              onChangeText={(text) => setPassword(text)}/>
            </Item>
              <Button style={{ width:'100%', marginTop:30, borderBottomEndRadius: 30, backgroundColor: '#fc8621'}}block success>
                <Text onPress={toLogin }>Register</Text>
              </Button>
          </Form>
        </ScrollView>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#682c0e',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 50,
    paddingBottom: 6

  }

})