import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, LogBox, View } from 'react-native';
import {Container, Body, Icon, Thumbnail, Item, Input, Right, Text, Content, Left, List, ListItem} from 'native-base'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { getTukang, setTukangCategory } from '../stores/actions/tukangAction'

export default function ListTukang({navigation, route}){
  const dispatch = useDispatch()
  const { type, category } = route.params
  const [typeTukang, setTypeTukang] = useState("")
  const [locationFilter, setLocFil] = useState('')
  const access_token = useSelector(state => state.tukangReducer.access_token)
  const tukangPerCategory = useSelector(state => state.tukangReducer.tukangPerCategory.filter(e => {
      return e.location.toLowerCase().includes(locationFilter) ;
    }))

  // const [categoryTukang, setCategoryTukang] = useState("")
  LogBox.ignoreAllLogs(true)
  useEffect(() => {
    axios({
      method : "GET",
      url: "http://54.255.251.4/user/tukang",
      headers: {access_token}
    })
    .then(({data}) => {
      dispatch(getTukang(data))

      dispatch(setTukangCategory( data.filter(e => {
        if(e.category === category){
          return e
        }
      })))
    })
    .catch(err => {
      console.log('masuk error',err)
    })
  }, [])
  
  // console.log(route.params, '<<<params')

  function toDetail(data) {
    navigation.navigate('Detail', {
  
      tukangId: data
    })
  }

  function inputFilter(e) {

    setLocFil(e.toLowerCase())
  }
  return (
    <ScrollView>
      <Container >
        <Content >
            
          <View style={{ backgroundColor: '#fc8621', paddingTop: 30 }}>
            <Body>
              <Text style={{fontSize:30, fontWeight: 'bold', alignSelf: 'center', color: 'black', paddingBottom: 20, textShadowOffset:{width: 5, height: 3}, textShadowRadius: 10}}>Tukang {category}</Text>
            </Body>
            <Item style={{borderTopEndRadius: 25, borderTopStartRadius:25, backgroundColor: 'white', marginLeft: 0}} >
              <Icon style={{marginLeft: 10}} name="ios-search" />
              <Input onChangeText={inputFilter} placeholder="Cari Kota"  />
            </Item>

          </View>
        {
          tukangPerCategory.length > 0 && tukangPerCategory.map((e, i) => {
            return (
                  <List  key={i}> 
                    <ListItem  avatar style={{marginTop:30}}>
                      <Left>
                        <Thumbnail source={{ uri: e.avatar_img.link}} />
                      </Left>
                    <TouchableHighlight underlayColor='white' onPress={() => {toDetail(e._id)}}>
                      <Body>
                        <Text>{e.name}</Text>
                        <Text note>{e.location}</Text>
                      </Body>
                    </TouchableHighlight>
                    </ListItem>
                  </List>
            )
          })
        }
        {
          tukangPerCategory.length === 0 && 
              <List>
                    
                    
                    
                    <Text>Belum ada data Tukang</Text>
                  </List>
        }
        </Content>
      </Container>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });