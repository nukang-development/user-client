import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { Container, Button, Content, Card, CardItem, Text, Body, Spinner } from "native-base"
import {useSelector} from 'react-redux'
import axios from 'axios'
import NumberFormat from'react-number-format'


export default function OrderList({navigation}) {
  const access_token = useSelector(state => state.tukangReducer.access_token)
  const dataProf = useSelector(state => state.tukangReducer.profileUser)
  const [listOrder, setOrder] = useState([])
  const [loading, setLoading]= useState(false)


  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: `http://54.255.251.4/user/order/${dataProf.id}`,
      headers: {access_token}
    })
    .then(({data}) => {
      setOrder(data)
    })
    .catch(err => console.log('error orderlist', err))
    .finally(_ => setLoading(false))
  },[])

  useEffect(() => {

  }, [])

  function toDone(id) {
    navigation.navigate('Done', {
      idOrder: id
    })
  }

  function refetch(){
    console.log('Hit');
  }

   function ReactNativeNumberFormat({ value }) {
    return (
      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rp.'}
        renderText={formattedValue => <Text>{formattedValue}</Text>} // <--- Don't forget this!
      />
    );
  }
  return (
      <>
        <Container  style={styles.container}>
          <Content>
            {
              !loading ? listOrder.map((order, i) => {
                return (
                        <Card style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}} key={i}>
                          <CardItem style={{justifyContent: 'space-between', backgroundColor: '#DDD'}} header>
                            <Text>{order.userName}</Text>
                            <Text>jadwal: {order.schedule}</Text>
                          </CardItem>
                          <CardItem style={{backgroundColor: '#DDD'}}>
                            <Body>
                              <Text style={{fontWeight: 'bold'}}>
                                Total:
                              </Text>
                                  <View>
                                    <ReactNativeNumberFormat value={order.total_price} />
                                  </View>
                            </Body>
                          </CardItem>
                          <CardItem style={{backgroundColor: '#DDD', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}} footer>
                          
                        
                          {
                            order.status === "accepted" && <Button onPress={() => toDone(order._id)} small rounded success style={{marginBottom:20, backgroundColor: '#fc8621'}}>
                                                          <Text >Selesai</Text>
                                                        </Button> 
                          }  
                          {
                            order.status === "done" &&  <Text > Status : <Text style={{fontWeight: 'bold'}}>Selesai</Text></Text>
                          }
                          {order.status === 'rejected' && <Text>Status : <Text style={{fontWeight: 'bold'}}>Ditolak</Text></Text>}
                          {
                            order.status === 'pending' && <Text>Status : <Text style={{fontWeight: 'bold'}}>Menunggu jawaban</Text></Text>
                          }
                            </CardItem>
                        </Card>
                  ) 
                  
                }) :  <Spinner color='red' />
              }
              {
                listOrder.length === 0 && <>
                <View style={styles.wrapImg}>
                <Image
                  style={{width: 80, height: 80, alignSelf: 'center'}}
                  source={{uri: 'https://i.imgur.com/csksurX.png'}}
                  resizeMode={'cover'} // cover or contain its upto you view look
                  />
                <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Belum Ada Orderan</Text>

                </View>
                </>
              }
          </Content>
      </Container>
            
      </>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapImg: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 100
  }
});