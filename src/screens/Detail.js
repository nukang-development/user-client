import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {Card, CardItem, Container, Body, View, Thumbnail, Button, Text, Content, Left, Icon, Row} from 'native-base'
import axios from 'axios'
import { Porto, ProjectDesc } from '../components'
import {useSelector, useDispatch} from 'react-redux'
import {getTukang} from '../stores/actions/tukangAction'


export default function Detail({navigation, route}){
  const dispatch = useDispatch()
  const access_token = useSelector(state => state.tukangReducer.access_token)
  const [detailTukang, setDetail] = useState('')
  const [dataOrder, setOrder] = useState([])

  
  const {tukangId} = route.params
  // console.log(data, "page detail><<<<<<<<<<<<<")


  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://54.255.251.4/user/tukang/${tukangId}/detail`,
      headers: {access_token}
    })
    .then(({data}) => {
      // console.log('=====', data);
      setDetail(data)
      dispatch(getTukang(data))
    })
    .catch(err => console.log('EEEEE',err))
  }, [])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://54.255.251.4/user/order/bytukang/${tukangId}`,
      headers: {access_token}
    })
    .then(({data}) => {
      setOrder(data.filter(e => e.status === 'done'))
    })
    .catch(err => console.log(err))
  },[])


  function toChat(){
    navigation.navigate('Chat', {
      tukangId
    })
  }

  function toOrder(){
    navigation.navigate('Order')
}
console.log(detailTukang, 'PPPPP');
  if(!detailTukang){
    return <Text>Loading...</Text>
  } else {
    return (
      <Container>
        <Content style={{backgroundColor: '#f9e0ae'}}>
          <View style={{flex: 0, marginTop:0, backgroundColor: '#f9e0ae', marginLeft:0, marginRight:0}}>
            <CardItem style={{backgroundColor: '#fc8621', borderBottomLeftRadius:40, paddingTop: 30}}>
              <Left>
                <Thumbnail large source={{uri: detailTukang.avatar_img.link}} />
                <Body>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{detailTukang.name}</Text>
                  <Text style={{fontSize: 13}}>Tukang {detailTukang.category}</Text>
                  <Text style={{fontSize: 13}} ><Icon name={'location'} style={{fontSize: 12}} /> {detailTukang.location}</Text>
                </Body>
              </Left>
            </CardItem>
          </View>
          <View style={{marginTop: 10, backgroundColor:'#f9e0ae'}}>
                <Text style={{alignSelf:'center', marginBottom: 10, fontWeight: 'bold'}}>Portofolio</Text>
                
            <Porto porto={detailTukang.portofolio_img}/>
            <ProjectDesc desc={{
              small_project_desc: detailTukang.small_project_desc,
              small_project_price: detailTukang.small_project_price,
              medium_project_desc: detailTukang.medium_project_desc,
              medium_project_price: detailTukang.medim_project_price,
              big_project_desc: detailTukang.big_project_desc,
              big_project_price: detailTukang.big_project_price
            }} />
            <Text style={{alignSelf: 'center', marginTop: 10, fontWeight: 'bold'}}>Komentar Pengguna : </Text>
            {
              dataOrder.length > 0 ? 
                dataOrder.map((e, i) => {
                  return (
                    <Card style={{backgroundColor: '#c4ab78'}} key={i}>
                    <CardItem style={{backgroundColor: '#c4ab78'}}>
                      <Text style={{fontWeight: 'bold'}}>{e.userName}</Text>
                    </CardItem>
                      <Body style={{marginBottom: 20}}>
                        <Text >
                          {e.comment}
                        </Text>
                      </Body>
                 </Card>

                  )
                }) : <Text style={{alignSelf: 'center', padding: 20}} note>Belum ada komentar</Text>
            }
            <Row style={{justifyContent: 'center'}}>
          <Button iconLeft onPress={toChat} style={{width: 130, borderTopLeftRadius: 20, marginRight: 2, backgroundColor: "#23689b"}} >
            <Icon style={{marginLeft: 50}} name='chatbox' />
          </Button>
          <Button style={{width: 130, borderTopRightRadius: 20, backgroundColor: '#16c79a'} } icon onPress={toOrder} >
            <Icon style={{marginLeft: 50}}  name='cart-outline' />
          </Button>
          </Row>
          </View>
        </Content>
      </Container>
    )

  }
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });