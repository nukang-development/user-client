import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Button, Content, Card, CardItem, Text, Item, Textarea } from "native-base"
import {useSelector} from 'react-redux'
import axios from 'axios'


export default function Done({navigation, route}){
    const {idOrder} = route.params
    const [comment, setComment] = useState('')
  const access_token = useSelector(state => state.tukangReducer.access_token)



    function fillComment (e) {
        setComment(e)
    }

    function submitDone(){
        axios({
            method: 'PUT',
            url: `http://54.255.251.4/user/order/${idOrder}/done`,
            data: {
                comment: comment
            },
            headers: {access_token}
        })
        .then(_ => {
            console.log('mashokkk');
            navigation.replace('Dashboard')
        })
        .catch(err => console.log(err, 'order done error'))
    }

    return (

        <Container style={{paddingLeft: 20, paddingTop: 100, backgroundColor:'#f9e0ae'}} >
            <Content>
                <Item style={{marginTop: 5, marginLeft: 15, marginBottom: 15 }}>
                    <Textarea onChangeText={fillComment} style={{width: '96%', paddingTop:10, borderRadius: 25, borderColor:'#fc8621', marginBottom: 20}} rowSpan={4} bordered placeholder="Komentar Anda" />
                </Item>
                <Button style={{marginLeft: 10, backgroundColor: '#fc8621'}} rounded onPress={submitDone}><Text>Submit</Text></Button>
            </Content>
        </Container>
    )
}