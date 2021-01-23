import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Container, Body, Icon, Thumbnail, Right, Text, Content, Left, List, ListItem} from 'native-base'

export default function ListTukang({route}){

  const {asal} = route.params
  const [typeTukang, setTypeTukang] = useState("")
  const [categoryTukang, setCategoryTukang] = useState("")
  // function toEdit(){
  //     navigation.push('Edit')
  // }

  useEffect(() => {
    if (asal === 19){
      setTypeTukang("TUKANG BANGUNAN")
      // setCategoryTukang()
    } else if (asal === 20) {
      setTypeTukang("TUKANG LISTRIK")
    } else if (asal === 21) {
      setTypeTukang("TUKANG KEBUN")
    }
  }, [])
  
  console.log(route.params, '<<<params')
  
  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider thumbnail>
            <Left>
              <Thumbnail square source={typeTukang} style={{width: 100, height: 100, marginTop: 20}}/>
            </Left>
            <Body>
              <Text style={{fontSize:30}}>{typeTukang}</Text>
            </Body>
          </ListItem>
          <ListItem avatar style={{marginTop:30}}>
            <Left>
              <Thumbnail source={{ uri: 'https://www.wowkeren.com/display/images/photo/2019/10/09/00277245.jpg'}} />
            </Left>
            <Body>
              <Text>Abang Bangunan</Text>
              <Text note>KOTA SEMARANG</Text>
            </Body>
            <Right>
              <Icon name="star" style={{color:"#f6b93b"}}>5.4</Icon>
            </Right>
          </ListItem>
          <ListItem avatar style={{marginTop:30}}>
            <Left>
              <Thumbnail source={{ uri: 'https://www.wowkeren.com/display/images/photo/2019/10/09/00277245.jpg'}} />
            </Left>
            <Body>
              <Text>Abang LISTRIK</Text>
              <Text note>KOTA BEKASI</Text>
            </Body>
            <Right>
              <Icon name="star" style={{color:"#f6b93b"}}>8.4</Icon>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });