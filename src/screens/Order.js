import React, { Component, useState } from 'react';
import { StyleSheet, View} from 'react-native'
import { Container, Content,Button, Input, Item, Textarea, Body, Text, List, ListItem, Picker} from 'native-base';
import DateOrder from '../components/Date'
import {useSelector} from 'react-redux'
import axios from 'axios'

export default function Order({navigation}) {
  const dataProf = useSelector(state => state.tukangReducer.profileUser)
  const dataTukang = useSelector(state => state.tukangReducer.tukang)
  const access_token = useSelector(state => state.tukangReducer.access_token)
  const [selectProj, setProj] = useState('small')
  const [total, setTotal] = useState(0)
  const [nohp, setHp] = useState('')
  const [address, setAddress] = useState('')
  const [slcDate, setDate] = useState('')
  // console.log(dataTukang, '<<<<');
// console.log(dataProf, 'IiIIII');
  function toSubmit() {
    let payload= {
      userId: dataProf.id,
      userName: dataProf.name,
      tukangId: dataTukang.id,
      tukangName: dataTukang.name,
      schedule: slcDate,
      contact: nohp,
      address: address,
      total_price: total,
    }
    console.log(payload, 'ini payloaddd');
    console.log(access_token, 'Tokeeeeen');
    axios({
      method: 'POST',
      url: `http://54.255.251.4/user/order`,
      headers: {access_token},
      data: payload
    })
    .then(_ => {
      console.log('berhasil');
      navigation.replace('Submit')

    })
    .catch(err => console.log('ERORRRRRR',err))

  }
  function onValueChange(e) {
    setProj(e)
  }
  function fillScale(e) {
    let value = Number(e)
    if(selectProj === 'small'){
      let price = Number(dataTukang.small_project_price)
      setTotal(value*price)
    } else if ( selectProj === 'medium') {
      let price = Number(dataTukang.medim_project_price)
      setTotal(value*price)
    } else if (selectProj === 'big') {
      let price = Number(dataTukang.big_project_price)
      setTotal(value*price)
    }
    
  }
  function fillAdrs(e) {
    setAddress(e)
  }
  function fillHp (e) {
    setHp(e)
  }

  function fillSchdl(date) {
    let selected = date.toISOString().substr(0, 10)
    setDate(selected)
  }
  
  return(
    <Container>
      <Content style={{backgroundColor: '#FFF'}} >
        <List>
          <ListItem>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>{dataProf.name}{'\n'}
            <Text note>{dataProf.email}</Text></Text>
          </ListItem>
          <Item regular style={{marginTop:10, marginLeft: 15, marginRight: 15, backgroundColor:'white', borderColor:'#fc8621' , borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
          <Input onChangeText={fillHp} placeholder='no. handphone' />
        </Item>
        <Item style={{marginTop: 5, marginLeft: 15, marginBottom: 15 }}>
          <Textarea onChangeText={fillAdrs} style={{width: '96%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, borderColor:'#fc8621', marginBottom: 20}} rowSpan={4} bordered placeholder="alamat" />
        </Item>
        <DateOrder schdl={fillSchdl} />
          <ListItem>
            <Body>
              <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>{dataTukang.name}
              <Text note>  {dataTukang.location}</Text></Text>
              <Text>Tukang {dataTukang.category}</Text>
            </Body>
          </ListItem>
        <ListItem>
          <Text style={{marginLeft: 15}}>Skala Proyek :</Text>                         
          <Picker
            note
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={selectProj}
            onValueChange={onValueChange}
          >
              <Picker.Item label="Kecil" value="small" />
              <Picker.Item label="Sedang" value="medium" />
              <Picker.Item label="Besar" value="big" />
              
          </Picker>
        </ListItem>
        <View style={{marginBottom: 20}}>
          <Item regular style={{marginTop:10, marginLeft: 15, marginRight: 15, backgroundColor:'white', borderColor:'#fc8621' , borderRadius: 25}}>
          <Input onChangeText={fillScale} style={{marginLeft: 20, marginBottom:5}} placeholder={'skala pekerjaan'} />

          </Item>
          <Text style={{marginLeft: 35, marginTop: 10, fontSize: 20}}>Total Harga : {total}</Text>

        </View >
        
        <Button style={{ width:'100%'}}block success>
          <Text onPress={toSubmit}>Kirim</Text>
        </Button>                  
        </List>
        
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  }
})