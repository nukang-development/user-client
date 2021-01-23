import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title } from 'native-base';

export default function Register() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword] = useState('')
  const navigation = useNavigation()

  function toLogin() {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <Header style={{backgroundColor: "#f8c291"}}>
        <Title style={{marginTop:10}}>Register Form</Title>
      </Header>
      <Content>
        <Form style={{paddingLeft:20, paddingRight:20}}>
        <Item style={{marginTop:20}} stackedLabel>
            <Label>Name</Label>
            <Input placeholder="Insert your name"
            value={name}
            onChangeText={(text) => setName(text)}/>
          </Item>
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
            <Button style={{ width:'100%'}}block success>
              <Text onPress={toLogin}>Register</Text>
            </Button>
          </Item>
        </Form>
      </Content>
    </Container>
  )
}